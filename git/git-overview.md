# Git Overview

Git is an open source program that keeps track of changes in your files.  It was written by the author of the Linux operating system, and is the core technology that GitHub is built on top of.

"Version control" and "source control" are the same thing.

Version control allows multiple versions of a codebase to exist.  New versions can be experimented with without breaking existing versions, and multiple developers can work on separate parts of the codebase without overwriting each others' work.

Git is a "DVCS," which stands for "Distributed Version Control System."  This means that the entire codebase -- including its full version history -- is mirrored on every developer's computer.

Although Git is mandatory for working on collaborative projects, it is also highly recommended that you use it on solo projects, too.

Even with Git, a single source file should not be edited by more than one person at a time because this will lead to merge conflicts.

Full Git documentation: https://git-scm.com/doc


## Advantages of Git (or version control in general)

- Branching and merging can happen automatically and quickly.
- Developers have the ability to work offline.
- Developers can experiment freely, without interfering with other developers' code.
- Multiple copies of the code eliminates reliance on a single backup. (But the drawbacks of having code on every developer's local machine are security and compliance risks. And a better solution for backups is to have a single source of truth that is backed up, rather than resuming work off of someone else's copy of the code.)
- Allows changes to be rolled back to previous versions if problems are discovered.







The official Git website is https://git-scm.com/.

Git is only local, however.  The full power of Git is when you sync it with a cloud account -- such as [GitHub](https://github.com/) or [Bitbucket](https://bitbucket.org/).  This allows you not only a backup copy in case your local crashes, but also allows multiple users to access and edit the files.  Or it allows the same user to access their code from another computer.

A Git repository is a Git-managed project.

Git and GitHub work extremely well together, but they are two different services.

Git *tracks changes* to your project; it does not store the same files again and again.


## How Git Tracks Changes

When you turn a folder into a Working Directory, Git creates a hidden folder called `.git` that stores all the logic for the changes you make and branch each of those changes belongs to.  This is a *repository*.  The Working Directory is all the actual project files.  The Repository is the version control logic.

The Repository contains two main areas:

1. Staging.  This is basically an `index` file.
2. Commits.  This is an objects folder containing the different commits (snapshots).

Staging is where changes are stored to tell Git that they should be included in the next commit.  (You might have a hundred files, but only have a couple of them in staging because you didn't make changes to the rest.)

Once all your changes are added to Staging, you commit those changes and they become tracked by Git.

You can jump back to previous commits if you need to.  (See [Reverting Changes](reverting-changes.md).)


## Using Git with Bitbucket

See [Bitbucket notes](https://github.com/toddcf/code-snippets/blob/master/bitbucket/bitbucket.md).