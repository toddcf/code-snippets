# Initialize (Create) a Repository

## To Create on Local First

1. Create a directory on your local machine and give it the name you want your repository to have.  (`mkdir`)
2. Navigate into that directory.  (`cd`)
3. Create a file inside the directory.  (`touch`)
4. In your terminal, run `git init`.

Your Git repository now exists on your local machine, and this directory will now contain a `.git` folder.

To push this repository to remote:

5. Stage the file: `git add .` or `git add -A`.
6. Commit the file: `git commit -m "Insert commit message here."`.





After you've created a directory on your local machine, here's how to turn it into a Git repository:

1. In your terminal, make sure you have navigated into the directory you want to turn into a Git repository.
2. Run `git init`.

This adds a `.git` subdirectory inside the current working directory.  This new `.git` subdirectory will include all the necessary metadata from the new Git repository.

NOTE: The `.git` subdirectory will be hidden, meaning that if you want to confirm its existence via the terminal, you'll need to use `ls -a` instead of just `ls`.

When the repository is initialized (created), Git takes a snapshot.