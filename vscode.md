
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

## run npm scripts as tasks
* In the Explorer (the file explorer that shows the files in your project folder/workspace which is usually on the left side of the screen (can be opened with `Ctrl+Shift+E`)) 
* click on  `...` to open `Views and More Actions...` and check `NPM Scripts`. The `NPM SCRIPTS`
* a tab should appear in the Explorer (usually in the bottom left)

it even supports debugging so you don't need to manually write debug configs 

for more on tasks see: https://code.visualstudio.com/docs/debugtest/tasks


## debugging
in `.vscode/launch.json`
### the currently openened file with ts support
```
    {
      "name": "current ts file",
      "type": "node",
      "request": "launch",
      "args": [
        "${relativeFile}"
      ],
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      "cwd": "${workspaceRoot}",
    },
```

