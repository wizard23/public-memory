# Tooling
## VS Code Setup
see vscode.md for general tipps :)
### Extension: PureScript IDE 
* main extension: "PureScript IDE "
* which uses "PureScript Language Support" language server
* optional "vscode-purity" PureScript formator == npm package "purity"

in project settings (or workspace settings):
#### use per workspace package.json/node_modules for purescript/spago/purity
```
"settings": {
  "purescript.addNpmPath": true
}
```

#### multiple paths in VSCode workpace should share one package.json/node_modules for purescript/spago/purity
(purescriptbook.code-workspace uses this setup)
Give a name to one of the folders and link to it in the settings in the .code-workspaces
```
"folders": [
  {
    "path": ".",
    "name": "root"
  }
]
"settings": {
  "purescript.pursExe": "${workspaceFolder:root}/node_modules/.bin/purs",
  "purescript.buildCommand": "${workspaceFolder:root}/node_modules/.bin/spago build",
}
```
