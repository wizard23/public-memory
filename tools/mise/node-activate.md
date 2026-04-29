# Node Version Setup Tutorial (LTS + Node 18 per project)

This guide shows how to:

* Install the latest Node.js LTS globally (default)
* Use Node.js v18 in a specific project directory
* Understand what happens under the hood

We will use **mise** (modern, fast, and simple).

---

## 1. Install mise

If you haven’t installed it yet (Linux Mint / Ubuntu-style):

```bash
sudo apt update -y && sudo apt install -y curl
sudo install -dm 755 /etc/apt/keyrings
curl -fSs https://mise.jdx.dev/gpg-key.pub | sudo tee /etc/apt/keyrings/mise-archive-keyring.asc > /dev/null

echo "deb [signed-by=/etc/apt/keyrings/mise-archive-keyring.asc] https://mise.jdx.dev/deb stable main" \
  | sudo tee /etc/apt/sources.list.d/mise.list

sudo apt update -y
sudo apt install -y mise
```

Activate mise in your shell:

```bash
echo 'eval "$(mise activate bash)"' >> ~/.bashrc
source ~/.bashrc
```

(For zsh: use `mise activate zsh`)

---

## 2. Install latest Node LTS (global default)

```bash
mise use -g node@lts
```

Check:

```bash
node -v
```

👉 This sets your **default Node version everywhere**.

---

## 3. Use Node 18 in a specific project

Navigate to your project:

```bash
cd my-project
```

Set Node 18 locally:

```bash
mise use node@18
```

This creates a file:

```
.mise.toml
```

Example content:

```toml
[tools]
node = "18"
```

---

## 4. Verify behavior

Outside project:

```bash
node -v
# → LTS (e.g. v22.x)
```

Inside project:

```bash
cd my-project
node -v
# → v18.x
```

---

## 5. Activation (important)

There are **two different things** that sound similar but are NOT the same:

---

### 5.1 Shell integration (required once per shell)

This is the IMPORTANT one:

```bash
eval "$(mise activate bash)"
```

What this does:

* Modifies your `PATH`
* Adds the **mise shims directory** to the front
* Installs shell hooks (directory change detection)

👉 Without this, mise **cannot switch versions automatically**.

You typically add this to your shell config:

```bash
# ~/.bashrc or ~/.zshrc
eval "$(mise activate bash)"
```

---

### 5.2 `mise activate` command (what it REALLY does)

This command:

```bash
mise activate bash
```

**prints shell code to stdout**.

That’s why we use:

```bash
eval "$(mise activate bash)"
```

👉 So technically:

* `mise activate bash` → generates the activation script
* `eval "$(...)"` → executes it in your current shell

---

If you run:

```bash
mise activate
```

without `eval`, it will:

* either print instructions
* or output shell code that is **not executed**

👉 So by itself, it usually does nothing useful.

---

### 5.3 Correct mental model

| Command                        | What it does                          |
| ------------------------------ | ------------------------------------- |
| `mise activate bash`           | prints activation script              |
| `eval "$(mise activate bash)"` | actually activates mise in your shell |
| `mise activate`                | shorthand/help (not sufficient alone) |

---

### 5.4 Why this design exists

mise needs to modify your *current shell environment* (PATH, hooks).

A normal subprocess cannot do that.

So instead it:

1. Prints shell code
2. You `eval` it in your shell

This is the same pattern used by tools like:

* `direnv`
* `nvm` (in older setups)
* `pyenv`

---

### 5.5 Quick check

Run:

```bash
which node
```

If everything is correct, you should see:

```
.../mise/shims/node
```

If NOT → your shell is not properly activated.

---

| Command                        | Purpose                              |
| ------------------------------ | ------------------------------------ |
| `eval "$(mise activate bash)"` | Hook mise into your shell (REQUIRED) |
| `mise activate`                | Helper/debug command                 |

---

### 5.4 Quick check

Run:

```bash
which node
```

If everything is correct, you should see:

```
.../mise/shims/node
```

If NOT → your shell is not properly activated.

---

## 6. What happens under the hood

### 6.1 Shims (the key concept)

When you type:

```bash
node
```

You are NOT calling Node directly.

Instead, your PATH points to:

```
~/.local/share/mise/shims/node
```

That shim:

1. Detects your current directory
2. Looks for `.mise.toml`
3. Resolves the correct Node version
4. Executes the real binary

---

### 6.2 Version resolution order

mise resolves versions in this order:

1. Local `.mise.toml`
2. Parent directories
3. Global config (`-g`)
4. System fallback

---

### 6.3 Where Node is actually installed

Installed versions live here:

```
~/.local/share/mise/installs/node/
```

Example:

```
node/18.x
node/22.x
```

mise just switches between them instantly.

---

### 6.4 Why this is powerful

* No reinstalling Node
* Instant switching
* Per-project isolation
* Works with npm, pnpm, yarn

---

## 7. Bonus: Pin exact version

Instead of `18`, you can lock:

```bash
mise use node@18.20.4
```

---

## 8. Bonus: Use with git

Commit this file:

```
.mise.toml
```

Now every developer automatically uses the correct Node version.

---

## 9. Common pitfalls

### ❌ Node version not switching

Fix:

```bash
which node
```

Should point to:

```
.../mise/shims/node
```

If not → shell not activated correctly.

---

### ❌ Permissions issues

If mise can’t install tools:

```bash
mkdir -p ~/.local/share/mise
chown -R $USER:$USER ~/.local
```

---

## 10. TL;DR

```bash
mise use -g node@lts     # global default
mise use node@18         # project-specific
```

That’s it.

---

If you want, I can also:

* integrate this with your devcontainer setup
* pin pnpm via corepack properly
* or align it with your monorepo workflow

---
## 🛠️ If you WANT a .mise.toml

Run this instead inside a project:
```
mise use node@24.14.1 --local
```
👉 This creates:
```
./.mise.toml
```
with:
```
[tools]
node = "24.14.1"
```

## 🚫 What happens if a dir is NOT trusted

You’ll see something like:
```
mise: directory is not trusted
```
And mise will refuse to:
* install tools
* activate environment
* run hooks
### ✅ How to trust a directory
1. Trust the current directory
```
mise trust
```
This marks the current directory as trusted.

2. Trust a specific directory
```
mise trust /path/to/project
```
