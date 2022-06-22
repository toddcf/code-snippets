# Rename Branch

## Rename Local Branch

1. Switch to the local branch you want to rename: `git switch <old_name>`
2. Rename: `git branch -m <new_name>`

Done.


## Rename Remote Branch

If the branch was already pushed the `<old_name>` branch to remote, you can also rename that as follows:

3. Push the new branch name to remote: `git push origin -u <new_name>`
4. Delete the old remote branch: `git push origin --delete <old_name>`


## Reference

https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/