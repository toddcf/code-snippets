# Deleting / Removing

If you simply delete a file in the Explorer and then run `ls`, you will still see the deleted file listed because Git still thinks it's tracking it.

And if you run `git status`, it will mark the deleted filename in red and warn you that you have changes "not staged for commit."

So, after you remove a file, you must stage and commit this change.  There are a couple options to choose from:


## Option 1: git add

You can run `git add <name of deleted file>`, and it will track the "change" of removing that file.


## Option 2: git rm

You can run `git rm <name of deleted file>`


Either way, now if you run `git status` again, the deleted file will be listed in green in the changes to be committed.  And if you run `ls` again, the deleted file will no longer be listed at all.

Next, you commit your change:

`git commit "<commit message>"`