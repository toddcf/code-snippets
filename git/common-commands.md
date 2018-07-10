# Common Git Commands

## Create and Clone

### From GitHub

1. Create a new repository on GitHub. (Initialize with README so there is something in the directory. Empty directories cannot be cloned.)
2. Copy the SSH link.
3. In the GitBash terminal, navigate to the directory in which you want the new repository to be cloned into.
4. Type `git clone _____` and then paste the SSH link. (Right-click the top bar of the GitBash terminal, then select `Edit > Paste`.)
  - Alternatively, type `git fetch origin _____`, and the branch you want, and it will download only that branch.
  - Then `git checkout ____` the new branch.
5. Confirm that the directory has been cloned to your local machine. (`cd` to the directory it should be in and type `ls`.)