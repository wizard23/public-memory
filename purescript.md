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
