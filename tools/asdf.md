
## Setup
### get asdf and unpack
```
curl -LO https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-amd64.tar.gz
tar -xvzf asdf-v0.18.0-linux-amd64.tar.gz -C ~/.asdf --strip-components=1
```

### add this to .bashrc 
```
# >>> asdf setup >>>
if [ -d "$HOME/.asdf" ]; then
  # asdf command + shims first on PATH
  export PATH="$HOME/.asdf/bin:$HOME/.asdf/shims:$PATH"
  # bash completion for asdf (safe if completions are available)
  command -v asdf >/dev/null 2>&1 && . <(asdf completion bash)
fi
# <<< asdf setup <<<
```

## Usage
### plugins i have installed
```
asdf plugin list
```

###Show all available plugins from the community index
```
asdf plugin list all
```

### Install and activate examples
```
asdf list all java | grep temurin-21
asdf install java temurin-21.0.8+9.0.LTS
asdf set --home java temurin-21.0.8+9.0.LTS

asdf list all clojure | tail

asdf install clojure latest
asdf set --home clojure latest
```

### check where it comes from
```
asdf current deno
which deno
```

### `asdf set`

| Command                       | Scope                     | Affects                                          | Stored in                          | Description                                                                               |
| ----------------------------- | ------------------------- | ------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `asdf set deno latest`        | **Local (default)**       | Only the **current project directory**           | `.tool-versions` in that directory | Most common — project-specific version                                                    |
| `asdf set -u deno latest`     | **User-level (global)**   | All projects that **don’t have a local version** | `~/.tool-versions`                 | Your personal default when no `.tool-versions` exists                                     |
| `asdf set --home deno latest` | **HOME-directory scoped** | Only applies inside your `$HOME` tree            | `~/.tool-versions` in `$HOME`      | Similar to `-u`, but only active when `$PWD` is under `$HOME` (not e.g. `/mnt` or `/opt`) |

