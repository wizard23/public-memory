# Undo Commits And Changes

Git has several different "undo" commands. Pick the one that matches whether
the commit is only local, already shared, or whether you want to keep the file
changes.

## Quick Decision Guide

* You staged the wrong file: use `git restore --staged <file>`.
* You staged everything by accident: use `git restore --staged .`.
* Last commit is local and you want to edit it: use `git reset --soft HEAD~1`.
* Last commit is local and you want to keep changes unstaged: use `git reset --mixed HEAD~1`.
* Last commit is local and you want to discard it completely: use `git reset --hard HEAD~1`.
* Commit was pushed or shared with others: use `git revert <commit>`.
* You used the wrong undo command: use `git reflog` to find the old commit.

## What Staging Means

Git has three common places where your work can be:

* Working tree: the files you are editing.
* Staging area, also called the index: the snapshot Git will put in the next
  commit.
* Commit history: snapshots already saved as commits.

`git add` copies the current version of a file into the staging area.

```bash
git add <file>
```

`git commit` saves what is currently staged. It does not automatically commit
every modified file unless you have staged those changes first.

```bash
git commit -m "Message"
```

This means a file can have staged changes and newer unstaged changes at the same
time. Check with:

```bash
git status
git diff
git diff --staged
```

Use `git diff` to see unstaged changes. Use `git diff --staged` to see what
would go into the next commit.

## Unstage Changes

Unstaging removes changes from the staging area but keeps them in your files.
This is useful when you ran `git add` too broadly.

Unstage one file:

```bash
git restore --staged <file>
```

Unstage everything:

```bash
git restore --staged .
```

Older Git versions used this form, which still works:

```bash
git reset HEAD <file>
```

After unstaging, the file is still modified in your working tree. If you also
want to throw away the file changes, use `git restore <file>`.

## Undo The Last Commit, Keep Changes Staged

Use this when you committed too early and want to make another commit with the
same staged changes.

```bash
git reset --soft HEAD~1
```

Result:

* The last commit is removed from the current branch.
* The file changes remain staged.
* You can edit files, then run `git commit` again.

## Undo The Last Commit, Keep Changes Unstaged

Use this when you want the files back in your working tree as normal modified
files.

```bash
git reset HEAD~1
```

This is the same as:

```bash
git reset --mixed HEAD~1
```

Result:

* The last commit is removed from the current branch.
* The file changes remain in your working tree.
* The changes are not staged.

## Undo The Last Commit And Discard Changes

Use this only when you are sure you do not want the changes from the last commit.

```bash
git reset --hard HEAD~1
```

Result:

* The last commit is removed from the current branch.
* The file changes from that commit are discarded.
* Any uncommitted tracked-file changes are also discarded.

Check before running it:

```bash
git status
git log --oneline -5
```

## Undo A Commit That Was Already Pushed

Prefer `revert` for commits that other people may have pulled. It makes a new
commit that applies the opposite patch, so shared history stays intact.

```bash
git revert <commit-sha>
```

To revert the latest commit:

```bash
git revert HEAD
```

To revert a range of commits:

```bash
git revert <oldest-commit-sha>^..<newest-commit-sha>
```

## Fix The Last Commit Message

Use this when the last commit is correct but the message is wrong.

```bash
git commit --amend
```

Or set the message directly:

```bash
git commit --amend -m "Better commit message"
```

If the commit was already pushed, amending rewrites history. Prefer a follow-up
commit unless you are working alone or the team expects force-pushes on that
branch.

## Add A Forgotten File To The Last Commit

```bash
git add <file>
git commit --amend --no-edit
```

This rewrites the last commit to include the newly staged file while keeping the
same commit message.

## Undo A Push

If you pushed a bad commit to a shared branch, use `git revert`.

```bash
git revert HEAD
git push
```

If the branch is private and you intentionally want to rewrite the remote branch:

```bash
git reset --hard HEAD~1
git push --force-with-lease
```

Use `--force-with-lease` instead of `--force`; it refuses to overwrite the
remote branch if someone else pushed new work since your last fetch.

## Recover After A Bad Reset

Git usually keeps the previous branch positions in the reflog.

```bash
git reflog
```

Find the commit you want to recover, then reset back to it:

```bash
git reset --hard <commit-sha>
```

If you want to inspect it first, create a branch:

```bash
git switch -c recovery-branch <commit-sha>
```

## Undo Uncommitted File Changes

Unstage a file but keep the file changes:

```bash
git restore --staged <file>
```

Unstage all files but keep the file changes:

```bash
git restore --staged .
```

Discard changes in one file:

```bash
git restore <file>
```

Discard all tracked-file changes:

```bash
git restore .
```

Remove untracked files and directories:

```bash
git clean -fd
```

Preview what `git clean` would remove:

```bash
git clean -fdn
```
