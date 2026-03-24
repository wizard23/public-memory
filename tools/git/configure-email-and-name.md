# Git Name & Email Configuration — Mini Tutorial

## 🧠 Why this matters

Git uses your **name + email** to label commits. This shows up in logs, GitHub, Forgejo, etc.

---

## ⚙️ Set your identity (global)

This sets it for **all repositories** on your system:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

✅ Example:

```bash
git config --global user.name "Super Mario"
git config --global user.email "mario@nintendo.com"
```

---

## 📦 Set identity per repository (optional)

If you want a **different identity for a specific project**:

```bash
git config user.name "Work Account"
git config user.email "work@example.com"
```

👉 Run this inside the repo directory (no `--global`).

---

## 🔍 Check your config

### Show global config:

```bash
git config --global --list
```

### Show repo-specific config:

```bash
git config --list
```

### Show just name/email:

```bash
git config user.name
git config user.email
```

---

## 🧾 Where Git stores this

* Global config:

  ```
  ~/.gitconfig
  ```

* Repo config:

  ```
  .git/config
  ```

---

## 🧨 Common pitfalls

* ❌ Forgot `--global` → only set for one repo
* ❌ Wrong email → commits not linked to GitHub account
* ❌ Typos → Git won’t warn you

---

## 💡 Pro tip: multiple identities

If you use multiple identities (work/private), you can auto-switch based on directory:

```bash
git config --global includeIf.gitdir:~/work/.path ~/.gitconfig-work
```

Then create `~/.gitconfig-work`:

```ini
[user]
  name = Work Name
  email = work@example.com
```

This lets Git **automatically use a different identity** for repos in `~/work/`.

---

## ✅ Done

You’re now correctly identified in all your commits 🎉
