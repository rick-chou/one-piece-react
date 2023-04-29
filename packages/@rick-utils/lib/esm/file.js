import zip from 'jszip';
const defaultFileTree = {
    key: '',
    title: '',
    dir: true,
    children: [],
};
/**
 *
 * @description transform zip file to FileObj
 * @since 1.0.0
 * @see FileObj
 */
export const parseZip = async (file) => {
    const zipData = await zip.loadAsync(file);
    const fileTree = defaultFileTree;
    const fileSet = {};
    const buildFileTree = async (path, file, fileTree, fileSet) => {
        let currentDirectory = fileTree;
        const segments = path.split('/');
        for (const segment of segments) {
            if (!segment)
                continue;
            let child = currentDirectory.children.find(c => c.title === segment);
            if (!child) {
                child = {
                    key: path,
                    dir: file.dir,
                    title: segment,
                    children: [],
                };
                currentDirectory.children.push(child);
            }
            currentDirectory = child;
        }
        if (!file.dir) {
            if (file.name.includes('.zip')) {
                const zipData = await zip.loadAsync(await file.async('blob'));
                zipData.forEach(async (_relativePath, _file) => {
                    // remove macos extra file
                    if (!_relativePath.includes('__MACOSX') &&
                        !_relativePath.includes('.DS_Store')) {
                        await buildFileTree(`${file.name}/${_relativePath}`, _file, fileTree, fileSet);
                    }
                });
            }
            else {
                fileSet[currentDirectory.key] = new File([await file.async('arraybuffer')], currentDirectory.title);
                currentDirectory.dir = false;
                currentDirectory.isLeaf = true;
            }
        }
    };
    await Promise.all(Object.entries(zipData.files).map(async ([relativePath, file]) => {
        if (!relativePath.startsWith('__MACOSX') &&
            !relativePath.includes('.DS_Store')) {
            await buildFileTree(relativePath, file, fileTree, fileSet);
        }
    }));
    return { fileTree: sortFiles(fileTree), fileSet };
};
/**
 *
 * @description transform files to FileObj
 * @since 1.0.0
 * @see FileObj
 *
 */
export const parseFiles = (files) => {
    const fileTree = defaultFileTree;
    const fileSet = {};
    files.forEach(file => {
        fileSet[file.name] = file;
        fileTree.children.push({
            key: file.name,
            title: file.name,
            dir: false,
            children: [],
            isLeaf: true,
        });
    });
    return { fileTree: sortFiles(fileTree), fileSet };
};
/**
 *
 * @description transform dirHandle to FileObj
 * @since 1.0.0
 *
 * @see FileSystemDirectoryHandle
 * @see FileObj
 */
export const parseDir = async (dirHandle) => {
    const fileTree = defaultFileTree;
    const fileSet = {};
    const buildFileTree = async (handle, rootDirHandle, fileTree, fileSet) => {
        if (handle.name === '.DS_Store')
            return;
        const path = (await rootDirHandle.resolve(handle)).join('/');
        let currentDirectory = fileTree;
        const segments = path.split('/');
        for (const segment of segments) {
            if (!segment)
                continue;
            let child = currentDirectory.children.find(c => c.title === segment);
            if (!child) {
                child = {
                    key: path,
                    dir: handle.kind === 'directory',
                    title: segment,
                    children: [],
                };
                currentDirectory.children.push(child);
            }
            currentDirectory = child;
        }
        if (handle.kind === 'directory') {
            for await (const entry of handle.values()) {
                await buildFileTree(entry, rootDirHandle, fileTree, fileSet);
            }
        }
        if (handle.kind === 'file') {
            fileSet[currentDirectory.key] = await handle.getFile();
            currentDirectory.dir = false;
            currentDirectory.isLeaf = true;
        }
    };
    for await (const entry of dirHandle.values()) {
        await buildFileTree(entry, dirHandle, fileTree, fileSet);
    }
    return { fileTree: sortFiles(fileTree), fileSet };
};
const compareFileName = (a, b) => {
    if (a.dir === b.dir) {
        return a.title.localeCompare(b.title);
    }
    return a.dir ? -1 : 1;
};
/**
 *
 * @description sort files by filename
 * @since 1.0.0
 *
 * @see FileTreeTypes
 *
 */
export const sortFiles = (fileTrees) => {
    fileTrees.children.sort(compareFileName);
    fileTrees.children.forEach(child => {
        if (child.children) {
            sortFiles(child);
        }
    });
    return fileTrees;
};
