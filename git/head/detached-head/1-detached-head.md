# Detached HEAD

A "detached HEAD" can occur if you check out a specific commit id, and that same commit id exists in multiple branches.  Git is now confused about which branch you want to check that commit id out in, and you will get a "detached HEAD" message.  This commit is now no longer part of a specific branch, and in fact if you run `git branch` while you are in this state, you'll see a list of your branches, but you'll also see that you are not in any of them -- you are in a separate "detached HEAD" state.

You have plenty of options to work within detached HEADs.  It's not actually a bad thing if you know what you want to do next.  (More on this later.)

To get out of the "detached HEAD" state, simply run `git checkout <branch name>` to check out a specific branch.