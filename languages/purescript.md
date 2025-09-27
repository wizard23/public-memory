# Tooling
## VS Code Setup
see vscode.md for general tipps :)

### Extension: PureScript IDE 
* main extension: "PureScript IDE "
* which uses "PureScript Language Support" language server
* optional "vscode-purity" PureScript formator == npm package "purity"

You probably want to:

#### use per vscode workspace package.json/node_modules for purescript/spago/purity
in project settings (or workspace settings):
```
"settings": {
  "purescript.addNpmPath": true
}
```
#### avoid having to npm install purescript globally in more complicated setups
(I used this for the purescriptbook vscode workspace since I did not want thi install a purecript for each chapter (which the clean `"purescript.addNpmPath": true` would entail) and installing any npm package globally is a no go anyway.)
just add the `node_modules/.bin` folder to the `PATH` env var before starting vscode
```
PATH=$(npm root)/.bin:$PATH
```


# Problems I encountered
and solutions kindly provided by ChatGPT ;)
## spago
### `spago docs` partially fails with: `ReferenceError: require is not defined in ES module scope, you can use import instead`
That’s from the search index step (purescript-docs-search) being executed under Node 22 in an ESM context. The search step is optional; your docs were still generated (Spago even printed the local index.html).
```
NODE_OPTIONS="--experimental-default-type=commonjs" spago docs --open
```
