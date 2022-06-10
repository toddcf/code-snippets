# Overall Revert to a Previous Commit

To go back to a previous commit, you can just `checkout` that commit's id number:

1. Copy the id number of the commit you want to roll back to.  (Run `git log` to find it if necessary.)
2. Type `git checkout `, paste in the commit id you copied, and hit Enter.

Your files will now revert to what they were at the time of that commit.  Even if you run [git log](git-log.md) at this point, it will no longer show the subsequent commits.

However, *the newer versions are not deleted.*  To see the subsequent commits, run `git checkout main` (or `master`) and then `git log`, and they will be there again.