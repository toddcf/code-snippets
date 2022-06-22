# Delete a Branch

- `git branch -d <branch name>` allows you to delete a branch only if you have merged its changes.
- `git branch -D <branch name>` forces the deletion, regardless of whether or not its changes have been merged.


## Delete Multiple Branches

To delete multiple branches, list each one with a space between:

`git branch -D <branch name> <branch name>`