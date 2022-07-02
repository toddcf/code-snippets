# Create New Branch

While in the branch you want to create your new branch off of, run `git branch <branch name>`.  For example, `git branch user-authentication` will create a new branch called `user-authentication`.

- Branch names do not need to be in quotes.
- Branch names cannot have spaces.
- You can create a branch off of one branch, and then create another branch off the second branch, etc.


## Shortcuts: Create and Switch to New Branch Simultaneously

- Use the `-b` flag: `git branch -b <branch name>`
- Use [`switch`](3-switch-or-checkout-branch.md) and the `-c` flag: `git switch -c <branch name>`.


## Commits Carry Over Into the New Branch

If you run `git log` immediately after creating and then checking out a new branch, you will see the same list of commits as the branch you created the new branch off of.  Each commit id and timestamp will be the same as they are in the original branch.


## Types of Branches

There are three types of branches that can tracking your changes:

- Local Tracking Branch (On your local machine.  Where you make your edits.)
- Remote Tracking Branch (Also on your local machine, but is a cache of the Remote Branch that acts as a go-between between the Local Tracking Branch and the Remote Branch.)
- Remote Branch (In the cloud, such as GitHub or Bitbucket.)


## Create Local Tracking Branch

`git branch --track <branch_name> origin/<branch_name>` will create a local tracking branch and link it to a specified remote tracking branch.  Best practice is to keep these two names the same to avoid confusion.


## Create Remote Branch

One method, but maybe a longer method:

- `git remote add origin <URL>`