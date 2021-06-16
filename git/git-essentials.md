# Git Essentials


## Overview

Git is an open source program that keeps track of changes in your files.  It was written by the author of the Linux operating system, and is the core technology that GitHub is built on top of.

"Version control" and "source control" are the same thing.

Version control allows multiple versions of a codebase to exist.  New versions can be experimented with without breaking existing versions, and multiple developers can work on separate parts of the codebase without overwriting each others' work.

Git is a "DVCS," which stands for "Distributed Version Control System."  This means that the entire codebase -- including its full version history -- is mirrored on every developer's computer.

Although Git is mandatory for working on collaborative projects, it is also highly recommended that you use it on solo projects, too.

Even with Git, a single source file should not be edited by more than one person at a time because this will lead to merge conflicts.


## Glossary

### Repository

A repository is your entire project, consisting of all of its files, and all of the different branches (versions) of those files.


### Branch

A branch is a version of your repository.  You start off with a master branch, and can create more branches off of that.  When you create a new branch, it starts off as a mirror image of the branch it was created from.  As you make changes on the new branch, it will differ from its originating branch.

This is useful because you can experiment and make mistakes on the new branch without breaking your original branch.  (Non-destructive editing.)  Then, when you are finished, you can merge the changes from the new branch into the original branch.


### Checkout

Once you have multiple branches, Checkout is how you switch between them.  Checking out a branch updates the files in the working directory to match the version stored in that branch, and tells Git to record your commits in that branch.


### Remote

Remote refers to the files on the website's server (as opposed to the files on your individual computer).


### Local

Local refers to the individual computer you are working on.  You download files from the remote to your local machine, make your changes on your local, and then push them back up to the remote.


### Clone

A clone is a copy of the remote repository on your local machine.  Cloning the repository onto your local allows you to work without being online all the time.  When you make changes to the files on your local, they do not affect the remote files.  When you are done making changes on your local and are ready to sync them to the remote, you can do a push.


### Fetch

A fetch pulls the latest version of the code from the remote (server) but does not merge it with the code on your local.  This is useful if you want to compare the two versions before deciding to merge.


### Merge

A merge is when you combine your local code with the remote code.  Merging takes the changes from one branch and applies them to the other.  This is usually done as a Pull Request, or via the command line.


### Pull Request

A pull request can be thought of as a request to merge changes from one branch into another.  If there are no conflicting changes, a pull request can automatically merge the two branches.


### Pull

A pull is a combined fetch & merge.  It fetches the latest version of the code from the server and merges it in with your local code.  It is best to run a pull before you do a push.  This ensures that you get the latest changes from the remote that other team members might have made and merge them in with your local code before you push your own changes back up to the server.


### Push

Once you have made your changes, and pulled (fetched & merged) the latest remote version, you are ready to push your merged changes up to the remote repository.  Once you do this, other team members can access your changes.


## Advantages of Git (or version control in general)

- Branching and merging can happen automatically and quickly.
- Developers have the ability to work offline.
- Developers can experiment freely, without interfering with other developers' code.
- Multiple copies of the code eliminates reliance on a single backup. (But the drawbacks of having code on every developer's local machine are security and compliance risks. And a better solution for backups is to have a single source of truth that is backed up, rather than resuming work off of someone else's copy of the code.)
- Allows changes to be rolled back to previous versions if problems are discovered.


## Commands

### Add

`git add <filename>` adds one or more files to the staging (index).

You can also use `git add -A` to automatically add only files that are new or edited.  Using this method, you do not need to list out each file specifically, and any files that are unchanged will be ignored.


### Commit

A commit records changes to the repository.

To add a descriptive message so that you have a record of what changes are being made with each commit, use `git commit -m <message here>`.

More info: https://git-scm.com/docs/git-commit


### Status

`git status` allows you to see which files you've changed, and which you still need to add or commit.