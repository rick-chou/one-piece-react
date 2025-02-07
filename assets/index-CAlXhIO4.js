import{m as a,a as d,j as n,E as r,b as o}from"./index-Bpq67avY.js";import{a as l,X as c,Y as u,W as m}from"./antd-Sqqp5mxm.js";import"./prettier-y3XyMyrW.js";import{j as p}from"./lodash-aGR4VZ5D.js";import"./chance-DnaHbaGl.js";function f(e,t={}){if(p(e))return e;try{return JSON.parse(e)}catch(s){return console.error(s),t}}function g(e){return JSON.stringify(f(e),null,2)}const b=`alefragnani.bookmarks
antfu.icons-carbon
be5invis.vscode-custom-css
bradlc.vscode-tailwindcss
brandonkirbyson.vscode-animations
christian-kohler.npm-intellisense
christian-kohler.path-intellisense
dbaeumer.vscode-eslint
dsznajder.es7-react-js-snippets
eamodio.gitlens
editorconfig.editorconfig
esbenp.prettier-vscode
github.github-vscode-theme
gruntfuggly.todo-tree
kisstkondoros.vscode-gutter-preview
naumovs.color-highlight
pkief.material-icon-theme
ritwickdey.liveserver
streetsidesoftware.code-spell-checker
teabyii.ayu
vscode-icons-team.vscode-icons
vue.volar
`,h=`{
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "editor.codeLensFontFamily": "Fira Mono for Powerline, Source Code Pro For Powerline, Menlo, Monaco, 'Courier New', monospace",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontFamily": "Fira Code, Source Code Pro, Fira Mono for Powerline, Source Code Pro For Powerline, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.fontWeight": "500",
  "editor.guides.bracketPairs": true,
  "editor.lineNumbers": "interval",
  "editor.minimap.autohide": true,
  "editor.minimap.enabled": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.tabCompletion": "on",
  "editor.tabSize": 2,
  "editor.definitionLinkOpensInPeek": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.autoSave": "afterDelay",
  "files.insertFinalNewline": true,
  "explorer.confirmDelete": false,
  "git.autofetch": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "workbench.colorTheme": "GitHub Dark Colorblind (Beta)",
  "workbench.editor.enablePreview": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.productIconTheme": "icons-carbon",
  "window.zoomLevel": 4,
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontFamily": "Fira Code",
  "extensions.autoUpdate": "onlyEnabledExtensions",
  "todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "XXX",
    "[ ]",
    "[x]"
  ],
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\\\*|^|^\\\\s*(-|\\\\d+.))\\\\s*($TAGS)",
  "security.workspace.trust.untrustedFiles": "open",
  "cSpell.userWords": ["ahooks", "dagre", "datasource", "mscgenjs", "xyflow"],
  "vscode_custom_css.imports": [
    "file:///Users/rick.zhou/.vscode-insiders/extensions/brandonkirbyson.vscode-animations-2.0.7/dist/updateHandler.js"
  ],
  "chat.commandCenter.enabled": false,
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
`;var i=(e=>(e.Settings="Settings",e.Plugins="Plugins",e))(i||{});const F=a(()=>{const[e,t]=l.useState("Settings");return d(m,{direction:"vertical",className:"w-full",children:[n(c,{options:Object.values(i),onChange:t}),n(u,{activeKey:e,renderTabBar:()=>n("div",{}),items:[{label:"Settings",key:"Settings",children:n(r,{language:"json",height:o,value:g(h),readOnly:!0})},{label:"Plugins",key:"Plugins",children:n(r,{language:"json",height:o,value:b,readOnly:!0})}]})]})});export{F as default};
