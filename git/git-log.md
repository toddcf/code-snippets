# Git Log

Running `git log` will display all your commits, plus additional information about each one.  Each commit will be listed in descending order (most recent commit at the top).

Each commit you make gets a "commit id," which is a long string of gibberish unique to that commit.  This id can be used later to load (or "check out") a specific commit.


# Reverting to Previous Commit

To *go back* to a previous commit, copy that id number, type `git checkout `, paste in the commit id, and hit Enter.

Your files will now revert to what they were at the time of that commit.  Even if you run `git log` at this point, it will no longer show the subsequent commits.

However, *the newer versions are not deleted.*  To see the subsequent commits, run `git checkout master` (or `main`) and then `git log`, and they will be there again.