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

# Problems I encountered
and solutions kindly provided by ChatGPT ;)
## spago
### `spago docs` partially fails with: `ReferenceError: require is not defined in ES module scope, you can use import instead`
That’s from the search index step (purescript-docs-search) being executed under Node 22 in an ESM context. The search step is optional; your docs were still generated (Spago even printed the local index.html).
```
NODE_OPTIONS="--experimental-default-type=commonjs" spago docs --open
```
