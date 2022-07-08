# Switch / Checkout Branch

## Switch (Newer, More Semantic Method)

`git switch <branch name>` allows you to switch to the branch name you type in.

To use `switch` to simultaneously create and switch to a new branch, see [Create Branch](2-create-branch.md).


## Checkout (Older, More General Method)

`git checkout <branch name>` will accomplish the same thing as `git switch`, but because `git checkout` can be used for both branches and commits, `git switch` was created exclusively for branches to reduce confusion.

NOTE: To do this via the Sourcetree UI instead of the command line, see [Sourcetree notes](https://github.com/toddcf/code-snippets/blob/master/sourcetree/sourcetree.md).


## Switch to Remote Branches

If there is a remote branch you have not yet pulled to your local, you can switch to it as follows:

`git switch origin/<remote_branch_name>`

This will create a remote tracking branch on your local and allow you to switch to it using `git switch <branch_name>` going forward.