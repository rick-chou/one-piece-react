import Blog from '@/blog/layout';

const ReplWrapper = () => {
  return (
    <div className="h-[95vh] w-[65vw] p-6 bg-white">
      <iframe
        src="https://rick-chou.github.io/repl/"
        // src={`http://localhost:5174/repl/`}
        className="h-[95vh] w-[65vw]"
      />
    </div>
  );
};

export const appList = [Blog, ReplWrapper];
