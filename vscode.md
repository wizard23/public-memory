
# HOWTOs
## add path to shells
in workspace settings add the path you want. In this example it is the workspace's "node_modules/.bin" folder: 
```
"terminal.integrated.env.linux": {
  "PATH": "${workspaceFolder}/node_modules/.bin:${env:PATH}"
}
```
If you use multi-root workspaces (so you have a "myproject.code-workspace") and you need a PATH modification for all workspaces pointing to the same dir you probably want it in the "settings" section in the .code-workspace file.
In this example we want all workspaces to use the node package bins from the "root" project (you have to give one folder an explicit name name so you define what "root" means)
```
"folders": [
  {
    "path": ".",
    "name": "root"
  }
]
"settings": {
  "terminal.integrated.env.linux": {
    "PATH": "${workspaceFolder:root}/node_modules/.bin:${env:PATH}"
  }
}
```
