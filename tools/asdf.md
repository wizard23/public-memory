
## Setup
### Links
* Download Pre-Compiled Binary - Easy: https://asdf-vm.com/guide/getting-started.html
* latest release: https://github.com/asdf-vm/asdf/releases

### Download and extract script
```
curl -fSLO https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-amd64.tar.gz
mkdir -p ~/.asdf/bin
tar -xvzf asdf-v0.18.0-linux-amd64.tar.gz -C ~/.asdf/bin
```
* curl -fSLO
  * `-f` / `--fail` : Non-2xx/3xx HTTP codes cause curl to exit with error (prevents saving error pages as files).
  * `-S` / `--show-error` : Show errors even if you use `-s` / `--silent`.
  * `-L` / `--location` :  Follow HTTP redirects.
  * `-O` / `--remote-name` : Save the downloaded file using the remote filename (by default, curl outputs to stdout).


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
| Command                                      | Scope                   | Affects                                          | Stored in                          | Description                                                |
|----------------------------------------------|-------------------------|--------------------------------------------------|------------------------------------|------------------------------------------------------------|
| `asdf set deno latest`                       | **Local (default)**     | Only the **current project directory**           | `.tool-versions` in that directory | Most common — project-specific version                     |
| `asdf set -u deno latest` (same as `--home`) | **User-level (global)** | All projects that **don’t have a local version** | `~/.tool-versions`                 | Your personal default when no `.tool-versions` exists      |


### install example
```
asdf plugin add deno https://github.com/asdf-community/asdf-deno.git

# Download and install the latest version of Deno
asdf install deno latest

# To set as the default version of Deno globally
asdf set -u deno latest

# To set as the default version of Deno locally (current project only)
asdf set deno latest
```


### uninstall example
```
asdf list deno                  # see installed versions
asdf uninstall deno 2.5.3       # repeat for any others
asdf plugin remove deno
asdf reshim
hash -r   # clear your shell’s command cache
```

### Purescript
```
asdf plugin add purescript https://github.com/jrrom/asdf-purescript.git


