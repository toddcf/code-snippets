# Git Essentials


## Overview

Git is an open source program that keeps track of changes in your files.  It was written by the author of the Linux operating system, and is the core technology that GitHub is built on top of.

"Version control" and "source control" are the same thing.

Version control allows multiple versions of a codebase to exist.  New versions can be experimented with without breaking existing versions, and multiple developers can work on separate parts of the codebase without overwriting each others' work.

Git is a "DVCS," which stands for "Distributed Version Control System."  This means that the entire codebase -- including its full version history -- is mirrored on every developer's computer.

Although Git is mandatory for working on collaborative projects, it is also highly recommended that you use it on solo projects, too.

Even with Git, a single source file should not be edited by more than one person at a time because this will lead to merge conflicts.

Full Git documentation: https://git-scm.com/doc


## Glossary

### Repository

A repository is your entire project, consisting of all of its directories (folders), files, and all of the different branches (versions) of those files.


### Branch

A branch represents and independent line of development.  It is a version of your repository.  You start off with a master branch, and can create more branches off of that.  When you create a new branch, it starts off as a mirror image of the branch it was created from.  As you make changes on the new branch, it will differ from its originating branch.

This is useful because you can experiment and make mistakes on the new branch without breaking your original branch.  (Non-destructive editing.)  Then, when you are finished, you can merge the changes from the new branch into the original branch.

Here is one common branch configuration:

1. A permanent "master" branch that production runs on.  (Development work is not done on the master branch.)
2. A branch for development.
3. A branch for bug fixes.


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


## Setup

### Username

Check if your username is set correctly:

`git config user.name`

If this does not output your name, set it as follows:

`git config -- global user.name "Todd Croak-Falen"` (with your name in the quotes).

Then run the check again to confirm that it has been set.


### Email

Check if your email is set correctly:

`git config user.email`

IMPORTANT: if you are going to use Git with Bitbucket, this must be the same email address you use to sign into Bitbucket.

If this does not output your email, set it as follows:

`git config -- global user.email "test@test.com"` (with your name in the quotes).

Then run the check again to confirm that it has been set.


## Commands

### Add

`git add <filename>` adds one or more files to the staging (index).  This means that this file will now be tracked by Git.

You can also use `git add -A` to automatically add only files that are new or edited.  Using this method, you do not need to list out each file specifically, and any files that are unchanged will be ignored.  ALSO: Any files that have been removed from the working directory will now be removed from the local repository.

Or you can use `git add .` to begin tracking all of the untracked files.

NOTE: Files must be added before they are committed.


### Commit

A commit records changes to the repository.

To add a descriptive message so that you have a record of what changes are being made with each commit, use `git commit -m <message here>`.  *This is a very important best practice.*  Keep these messages clear and concise, and write them in the present tense.  They will show up as the title of each commit, and will provide you with an easy-to-read chronological list of the changes that have been made to the repository over time.  You want other people -- not just you -- to be able to see what has been done.

NOTE: Files must be added before they are committed.

More info: https://git-scm.com/docs/git-commit


### Status

`git status` allows you to see which files you've changed, and which you still need to add or commit.


### pwd

"Print Working Directory."  Will tell you where you are.


### cd

`cd` navigates you to a different directory.

`cd <directory name>` will move you into the child directory of your choice.

`cd ..` moves you up one directory level.  (In other words, into the parent folder of the folder you were just in.)


### mkdir

Creates a directory (folder).

For example, `mkdir project-name` creates a folder called `project-name`.


### touch

Creates a file.  Needs to include the filetype extension.

For example, `touch git-essentials.md` was used to create this markdown (.md) file.


### Deleting Files and Directories

Remove, or `rm` is used to delete *files* (not directories).

For example, `rm git-essentials.md` would delete this file.

Remove Directory, or `rmdir`, is used to delete entire *directories* (as opposed to individual files).


### ls

`ls` lists all the child directories and files inside your current directory location.

Useful for seeing your options to navigate to or delete, or to confirm that the `mkdir` or `touch` you just ran created the directory or file you wanted.

NOTE: `ls` will not show hidden directories and files.  To also see hidden directories and files, use `ls -a`.


## Creating a Repository

After you've created a directory on your local machine, here's how to turn it into a Git repository:

1. In your terminal, make sure you have naviagated into the directory you want to turn into a Git repository.
2. Run `git init`.

This adds a `.git` subdirectory inside the current working directory.  This new `.git` subdirectory will include all the necessary metadata from the new Git repository.

NOTE: The `.git` subdirectory will be hidden, meaning that if you want to confirm its existence via the terminal, you'll need to use `ls -a` instead of just `ls`.

When the repository is initialized (created), Git takes a snapshot


## Updating a Repository

Git tracks the difference between your working directory, and your local repository.

1. Working Directory: Your local directory with your source files under Git control.
2. Local Repository: 

For example, when you first initialize a repository on your local machine, both your working directory and your local repository are empty.  Git essentially takes a snapshot of each one's status.  At this time, those snapshots will match.

But once you add directories and files to the working directory, the local repository is still empty, while the working directory has the new files in it.

Running `git status` will show you the state of the working directory in the staging area.  If there are any differences between this and the local repository, it will let you know.  So if you run `git status` in this case, it will take new screenshots of each one and notice that they are different.  In this case, it will list the files that need to be added to the local repository as "untracked."  (If a file is in your working directory, but not your local repository, Git does not yet know whether you want to add those files or ignore them.)


### Staging and Committing

Committing is a two-step process:

1. First the "staging" (`add`).
2. Then the actual committing (`commit`).

`git commit` records the changes to the repository.  It's taking a new snapshot of your repository.

Best Practices:

- Always add a clear, concise commit message.  These messages will show up as the title of each commit, providing you and other people an easy way to see the chronological progress of the project.
- Commit messages should be in the present tense.  ("Add skeleton files for web page," not "Added skeleton files for web page.")
- Commit often.  Each time you complete a section of your project, commit it.