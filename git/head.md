# HEAD

The `HEAD` is the most recent commit of your current branch.

For example, if you check out the `main` branch and it has three commits in it, commit #3 of the `main` branch becomes your `HEAD`.  Then if you check out your `dev` branch and it has seventeen commits in it, commit #17 of the `dev` branch becomes your `HEAD`.

Sometimes when you run `git log`, you'll see something like `(HEAD -> main)` in your log next to the most recent commit.  It is telling you that `HEAD` is currently set to (or "pointing to") the `main` branch, and that that particular commit is currently your `HEAD`.


## Detached HEAD

A "detached HEAD" can occur if you check out a specific commit id, and that same commit id exists in multiple branches.  Git is now confused about which branch you want to check that commit id out in, and you will get a "detached HEAD" message.  This commit is now no longer part of a specific branch, and in fact if you run `git branch` while you are in this state, you'll see a list of your branches, but you'll also see that you are not in any of them -- you are in a separate "detached HEAD" state.

You have plenty of options to work within detached HEADs.  It's not actually a bad thing if you know what you want to do next.  Notes for this scenario will be added later.

To get out of the "detached HEAD" state, simply run `git checkout <branch name>` to check out a specific branch.