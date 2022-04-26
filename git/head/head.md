# HEAD

The `HEAD` is the most recent commit of your current branch.

For example, if you check out the `main` branch and it has three commits in it, commit #3 of the `main` branch becomes your `HEAD`.  Then if you check out your `dev` branch and it has seventeen commits in it, commit #17 of the `dev` branch becomes your `HEAD`.

Sometimes when you run `git log`, you'll see something like `(HEAD -> main)` in your log next to the most recent commit.  It is telling you that `HEAD` is currently set to (or "pointing to") the `main` branch, and that this particular commit is currently your `HEAD`.