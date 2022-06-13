# Stage and Commit

Committing is a two-step process:

1. First the "staging" (`add`).
2. Then the actual committing (`commit`).

`git commit` records the changes to the repository.  It's taking a new snapshot of your repository.


## Add

There are a few ways to use the `git add` command.

1. Add a Specific File: `git add` followed by a space and then the filename: `git add app.js`
2. Track All Files in the Project Folder: `git add .`


## Best Practices for Commits

- Always add a clear, concise commit message.  (No more than 72 characters.)  These messages will show up as the title of each commit, providing you and other people an easy way to see the chronological progress of the project.
- Commit messages should be in the imperative / present tense.  ("Add skeleton files for web page," not "Added skeleton files for web page.")  This convention aligns with commit messages that are generated by commands such as `git merge` and `git revert`.
- Commit often.  Each time you complete a section of your project, commit it.  (This creates many save points in case you need to revert back to one of them later.  It also allows you to keep each commit message very short.)

See https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53 for more info.


## View All Commits

You can type `git log` in the terminal to see a list of the commits you've made (with messages) in descending order.

NOTE: You should see `(HEAD -> master)` next to the most recent commit in your log.  For further explanation, see [HEAD](/head/1-head.md).