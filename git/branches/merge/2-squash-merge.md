# Squash

Using the `--squash` flag, you can combine multiple commits into one when you merge branches.

Let's say you you're in your `main` branch, and you have five commits in your `feature` branch that you want to merge into `main`.  You have the option of using `git merge --squash feature`, and it will "squash" those five commits into just one and only merge the one into `main`.

Note that after doing this, you then have to do another `git commit -m` and write one message that summarizes the entire squash.