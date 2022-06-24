# Initialize (Create) a Repository

## To Create on Local First

If you don't already have a project started, create at least the skeleton content:

1. Create a directory on your local machine and give it the name you want your repository to have: `mkdir <directory_name>`
2. Navigate into that directory: `cd <directory_name>`
3. Create a file inside the directory: `touch <file_name>`

Now turn your directory into a Git repository:

4. `git init`

Your Git repository now exists on your local machine.  When the repository is initialized (created), Git takes a snapshot.  This and other changes will be tracked via a `.git` subdirectory that now exists in your project's directory, which contains all the necessary metadata to do so.

NOTE: The `.git` subdirectory will be hidden, meaning that if you want to confirm its existence via the terminal, you'll need to use `ls -a` instead of just `ls`.

Note that Git and GitHub are two separate tools, and they do not actually know about each other until you connect them.

5. Run `git remote add origin <URL>`
  - `remote add` means connect this local repository to a remote repository.
  - `origin` is the name of the remote machine.  Once the origin is set to the URL that follows it, `origin` becomes an alias (shorthand) so that you don't have to type out the entire URL each time.  (You can change this alias if you want to.)
  - `<URL>` is the specific remote repository you want to connect this local repository to.

To push this repository to remote (GitHub in this case, but Bitbucket is an alternative):

6. Stage the file: `git add .` or `git add -A`.
7. Commit the file: `git commit -m "Insert commit message here."`.


## To Create on Remote First

1. Create a new repository on GitHub. (Initialize with README so there is something in the directory -- empty directories cannot be cloned.)
2. Copy the SSH link.
3. In your terminal, navigate to the directory in which you want the new repository to be cloned into.
4. Type `git clone ` and then paste the SSH link.  (If `CTRL` + `V` doesn't work, right-click the top bar of the GitBash terminal, then select `Edit > Paste`.)
  - Alternatively, type `git fetch origin <branch_name>`, and the branch you want, and it will download only that branch.
  - Then `git switch <branch_name>` the new branch.
5. Confirm that the directory has been cloned to your local machine.  (While in the directory it should be in, type `ls`.)