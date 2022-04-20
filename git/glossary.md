# Git Glossary

## Repository

A repository is your entire project, consisting of all of its directories (folders), files, and all of the different branches (versions) of those files.

There are "remote" and "local" repositories (see definitions farther down in this list).


## Branch




## Checkout

Once you have multiple branches, Checkout is how you switch between them.  Checking out a branch updates the files in the working directory to match the version stored in that branch, and tells Git to record your commits in that branch.


## Remote

Remote refers to the files on the website's server (as opposed to the files on your individual computer).

NOTE: A remote repository does *not* have a working directory associated with it, while the local repository does.  It will only consist of the `.git` subdirectory.

NOTE: A remote repository is sometimes also called a "central" repository.  They are the same thing.


## Local

Local refers to the individual computer you are working on.  You download files from the remote to your local machine, make your changes on your local, and then push them back up to the remote.

NOTE: The local repository has a working directory associated with it, while the remote repository does not.


## Clone

A clone is a copy of the remote repository on your local machine.  Cloning the repository onto your local allows you to work without being online all the time.  When you make changes to the files on your local, they do not affect the remote files.  When you are done making changes on your local and are ready to sync them to the remote, you can do a push.


## Fetch

A fetch pulls the latest version of the code from the remote (server) but does not merge it with the code on your local.  This is useful if you want to compare the two versions before deciding to merge.


## Merge

A merge is when you combine your local code with the remote code.  Merging takes the changes from one branch and applies them to the other.  This is usually done as a Pull Request, or via the command line.


## Pull Request

A pull request can be thought of as a request to merge changes from one branch into another.  Often a change needs to be reviewed before being integrated into the official project.  But depending on your settings, if there are no conflicting changes a pull request can automatically merge the two branches.


## Pull

A pull is a combined fetch & merge.  It fetches the latest version of the code from the server and merges it in with your local code.  It is best to run a pull before you do a push.  This ensures that you get the latest changes from the remote that other team members might have made and merge them in with your local code before you push your own changes back up to the server.


## Push

Once you have made your changes, and pulled (fetched & merged) the latest remote version, you are ready to push your merged changes up to the remote repository.  Once you do this, other team members can access your changes.





## Terminology

- Working Directory (aka Tree): A folder that is being managed by Git that contains all the files and subfolders for your project.
- Commit: A snapshot of your project at a given moment.  Each commit does not re-save the entire file; it only saves the *changes* that were made to the file.  (The initial commit will of course store all of the files, but after that, only the changes are stored.)
- Branch: A set of changes, kept separate from other sets of changes in other branches.  The `main` branch is typically the production (live) branch.  Since you don't want to make changes to that until you are sure they will not break the site, you create separate branches to work on until you know they are ready to merge into `main`.  This even allows multiple developers to work on changes in parellel without blocking each other.