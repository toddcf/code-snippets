# Delete a Branch

Note that you cannot delete your default branch.  If you want to change or rename your default branch (say, from `master` to `main`), see [Rename Branch](4-rename-branch.md).


## Delete Local Branch

- `git branch -d <branch_name>` allows you to delete a branch only if you have merged its changes.
- `git branch -D <branch_name>` forces the deletion, regardless of whether or not its changes have been merged.


### Delete Multiple Branches

To delete multiple branches, list each one with a space between:

`git branch -D <branch_name> <branch_name>`


## Delete Remote Branch

- `git branch -d origin <remote_branch_name>`

(NOTE: `origin` represents the remote name.  You may have changed this, but in most cases, the remote name will be `origin`.)


## Delete Local, Remote Tracking, and Tracking Branches

While in your `main` branch:

1. First delete the local branch (see above).
2. Then delete the remote tracking branch: `git branch --delete --remote origin/remote_branch_name`
3. Then push the deletion to the remote: `git push origin --delete <remote_branch_name>` (Unless you have already deleted it via GitHub, in which case this will thorw an error because it no longer exists.)

Note that you can do just step 3 to delete the remote but not the local.  If you do this, the remote tracking branch will also be automatically deleted because it no longer has anything to track.


## Reference

https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely