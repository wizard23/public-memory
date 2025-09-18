
## Setup
### get asdf and unpack
curl -LO https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-amd64.tar.gz
tar -xvzf asdf-v0.18.0-linux-amd64.tar.gz -C ~/.asdf --strip-components=1

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
asdf plugin list

###Show all available plugins from the community index
asdf plugin list all

asdf list all java | grep temurin-21
asdf install java temurin-21.0.8+9.0.LTS
asdf set --home java temurin-21.0.8+9.0.LTS



asdf list all clojure | tail

asdf install clojure latest
asdf set --home clojure latest
