# Cherry-Pick Merge

Cherry-picking is when you add a specific commit to a specific branch, as opposed to every commit in chronological order.

Cherry-picking copies the commit, which results in a new hashtag for that commit.


## When to Use Cherry-Pick

Maybe a small change needs to be inserted without disrupting other work.

Let's say you and other developers are working on a file, and your overall changes are not going to be ready to publish for a while.  But you notice a typo in the file that needs to be fixed today.

You can fix the typo in your branch and commit that change.  Then you can use cherry-pick to publish *only that commit* without publishing all the rest of your changes in your branch.


## How to Cherry-Pick

1. In the branch where you made the change, copy the commit id number.
2. Go to the branch you want to merge this commit into.  (Let's say it's `main`.)
3. Run `git cherry-pick <commit id>`.  (This commit then becomes the [HEAD](../../head/head.md) of the `main` branch -- but it is a copy of the original commit with a new commit id number.)