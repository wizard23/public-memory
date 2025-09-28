```json
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Current File with ts-node",
            "runtimeExecutable": "ts-node",
            "program": "${file}",
            "cwd": "${workspaceFolder}",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "sourceMaps": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Current File with ts-node/register",
            "runtimeExecutable": "node",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "program": "${file}",
            "cwd": "${workspaceFolder}",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "sourceMaps": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Nodemon Current File with ts-node",
            "runtimeExecutable": "nodemon",
            "runtimeArgs": [
                "--exec",
                "ts-node"
            ],
            "program": "${file}",
            "cwd": "${workspaceFolder}",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "sourceMaps": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Nodemon Current File with ts-node/register",
            "runtimeExecutable": "nodemon",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "program": "${file}",
            "cwd": "${workspaceFolder}",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "sourceMaps": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "name": "Attach to node process (need to be started with node --inspect or nodemon --inspect)",
            "type": "node",
            "request": "attach",
            "port": 9229,
            "address": "localhost",
            "restart": true,
            "sourceMaps": true,
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "cwd": "${workspaceFolder}",
            "localRoot": "${workspaceFolder}",
            "smartStep": true
        },
        {
            "name": "Launch npm run dev",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run",
                "dev"
            ],
            "cwd": "${workspaceFolder}",
            "sourceMaps": true,
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js",
                "${workspaceFolder}/**/*.ts"
            ],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }
    ]
}
```





