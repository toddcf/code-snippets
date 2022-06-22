# Rename Branch

## Rename Default Branch

If you are renaming your default branch (say, from `master` to `main`), you need to log into GitHub and do this on their end.  (This is because GitHub requires a default branch, and you cannot delete the default branch.)

1. Go to the repository you want to rename the default branch for.
2. Click `Settings` > `Branches`
3. Under the "Default Branch", click the Edit icon and type in the new name.


## Rename a Regular Branch

If you are just renaming a non-default branch, the process is much easier:


### Rename Local Branch

1. Switch to the local branch you want to rename: `git switch <old_name>`
2. Rename: `git branch -m <new_name>`

Done.


### Rename Remote Branch

If the `<old_name>` branch is already in the remote, you can also rename that as follows:

3. Push the new branch name to remote: `git push origin -u <new_name>`
4. Delete the old remote branch: `git push origin --delete <old_name>`

For more information on deleting branches, see [Delete Branch](7-delete-branch.md).


## Reference

https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/