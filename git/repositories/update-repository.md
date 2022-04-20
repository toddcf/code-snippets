# Updating a Repository

Git tracks the difference between your working directory, and your local repository.

1. Working Directory: Your local directory with your source files under Git control.
2. Local Repository: 

For example, when you first initialize a repository on your local machine, both your working directory and your local repository are empty.  Git essentially takes a snapshot of each one's status.  At this time, those snapshots will match.

But once you add directories and files to the working directory, the local repository is still empty, while the working directory has the new files in it.

Running `git status` will show you the state of the working directory in the staging area.  If there are any differences between this and the local repository, it will let you know.  So if you run `git status` in this case, it will take new screenshots of each one and notice that they are different.  In this case, it will list the files that need to be added to the local repository as "untracked."  (If a file is in your working directory, but not your local repository, Git does not yet know whether you want to add those files or ignore them.)