# Push

To push to remote (after staging and committing changes):

`git push origin <remote_branch_name>`

Or, if you don't want to have to include `origin <remote_branch_name>` every time, you can run this command to set it to the upstream repo:

- `git push -u origin <remote_branch_name>`
- `git push --set-upstream origin <remote_branch_name>`

After that, you can just run `git push` every time (from your branch).