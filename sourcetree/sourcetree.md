# Sourcetree

Sourcetree is a UI that allows you to use Git without using the command line.


## History

The history tab lets you see all the commits that have been made.


## Viewing File Differences

While the "History" tab is selected, click any commit in the list.  Another panel will show you the changes that were made for that commit.

- Green highlights are additions.
- Red highlights are deletions.


## Searching

Larger projects are too difficult to search through visually.  Use the "Search" tab and type in what you are looking for.  You can also edit the dropdown to filter for the type of search you are doing.  For example, you can search within commit messages, branches, users, etc.

Then, you can click on each search result to see the changes made in each one displayed in the panel below.


## Selecting Projects

The buttons along the top of the Sourcetree UI will let you create a new repository, or locate an existing remote or local repository / working directory.


## Branching via Sourcetree

To create a new branch via Sourcetree (as opposed to using the command line):

1. Make sure you are on the branch you want to branch off of.  (For example, if you are going to create a `develop` branch off of the `master` branch, first make sure you are on the `master` branch.)  Look in the left side panel, under "Branches."  The branch you are currently on will be in bold.  If you are not on the branch you want to be on, just right-click it and select "Checkout."
2. To create a new branch off of the branch you are on, click the "Branches" button in the top row of the UI.
3. Type in the name of the new branch.  (In this example, `develop`.)
4. Choose which commit you want to branch off of.  (In this example, you can leave it as "Working Copy Parent."  If this was not the case, you could specify a different commit.)
5. If you check "Checkout New Branch," it will automatically switch you to the new branch after it's created.  (Like using `git checkout -b <new branch name>` in the command line.)
6. Click "Create Branch."


Now let's say you want to create another new branch (this time called `search-users`) off of the new `develop` branch you just created.  Repeat the process, except *do not* start on the `master` branch:

1. Make sure you are on the `develop` branch this time.
2. Click the "Branches" button.
3. Confirm that you are on the `develop` branch, then name the new branch `search-users`.
4. Click "Create Branch."


## Creating Files via Sourcetree

1. Click the "Explorer" button at the top right of the Sourcetree UI.  This will open your current location in your computer's explorer.
2. Create the new files you want in the explorer.
3. From the explorer, open the new file(s) in your text editor of choice.  Make a couple changes and save the file(s).
4. Back in Sourcetree, you should see a message telling you that you have "uncommitted changes."  This is like running `git status` in the command line.
5. To stage: At the bottom of the screen, you will see a panel listing all the Unstaged Files.  If you click a file in this panel, you will see the panel to the right of that add a button called "Stage hunk."  Clicking this will move the selected file up to the "Staged" panel.  This is like running `git add`.
6. To UN-stage: In the event you need to move a file back down to the Unstaged area, click on it, then click "Unstage Selected."  (This is much easier than using the command line.)
7. To commit: Once your files are in the "Staged" area, click the "Commit" button in the top left of Sourcetree's UI header.  This will show you a confirmation screen, where you can click each file to view its changes, and add a commit message.  This is like running `git commit -m`.
8. Click the "Commit" button at the bottom right.  Your Sourcetree UI should change to reflect the updates.


## Editing Existing Files via Sourcetree

1. Make sure you are in the branch you want to be in.
2. Click the "Explorer" button at the top right of the Sourcetree UI.  This will open your current location in your computer's explorer.
3. From the explorer, open the file(s) you want to edit in your text editor of choice.
4. Make and save your file changes in the text editor.
5. Back in Sourcetree, you will now see your changes reflected in the UI.  If you click on a changed file, it will show you the specific differences.  (Again, green highlights are additions, red highlights are deletions.)
6. Run through the same staging and committing process described under "Creating Files via Sourcetree."


## Merging Branches via Sourcetree

If we continue from the previous examples, switching to the `develop` branch in Sourcetree will now show a highlighted commit from the changes we've made.

1. Right-click the other branch that you want to merge into the `develop` branch.  (In this case `search-users`.)
2. Select "Merge search-users into current branch."
3. Confirm your settings and click "Okay."


## Handling Merge Conflicts via Sourcetree

Let's say you have a merge conflict.

To simulate one for practice, continuing from the previous example:

1. Checkout `master` branch.
2. Make a change to one of the files you've committed in another branch, except this time make the change in `master`.
3. Now when you attempt to commit, it will give you an error message, and show you the conflict in your text editor so you can make the corrections yourself.  (Similar to when you see this in the command line, there will be a `=========` divider.  Everything above this divider is the branch you are merging *into*.  Everything below this divider is the branch you are merging *from*.)
4. The text editor will probably have options you can click to tell it which change you want to keep.  Click the one you want and save the file.
5. Back in Sourcetree, you will see your fix in the Unstaged file.  If everything looks correct, stage and commit these `master` changes using the usual process.
6. Then, keeping the `master` branch checked out, right-click on the other branch you want to merge into it, and select "Merge into current branch."
7. This time, everything should go smoothly.  In the UI, you will see the graphic visualization of the secondary branch being merged back into `master`.


## Adding Tags via Sourcetree

After successfully merging into `master`, add a tag.

1. Right-click on the commit you want to add the tag to.
2. Select "Tag."
3. Type in the version name: `v1.0.0`, etc.
4. Select "Working Copy Parent."
5. Click "Add Tag."


## Pushing to Bitbucket via Sourcetree

<!-- See [Bitbucket notes](https://github.com/toddcf/code-snippets/blob/master/bitbucket/bitbucket.md). -->

Ultimately, this is the equivalent of `git push`.

1. In Bitbucket, follow the Cloning process to copy the command for the command line.  (`git remote add origin`, etc.)
2. As a shortcut, go to Sourcetree, and from the branch you want to be in, click "Terminal" in the top right of the UI.  This will open your terminal to the exact pathname you want to be in.
3. Paste the command into the terminal and hit Enter.
4. Now go to Sourcetree and click the "Push" icon in the top toolbar.
5. In the window that pops up, select the `origin` repository, and check all the branches.  Also select "Push all tags."  Push "OK."
6. Now go back to Bitbucket and click the "Commits" tab to confirm that all your commits are now listed.


## Pulling to Bitbucket via Sourcetree

<!-- See [Bitbucket notes](https://github.com/toddcf/code-snippets/blob/master/bitbucket/bitbucket.md). -->

NOTE: If there are commits to be pulled (aka "ahead" of you), Sourcetree will show you a notification to let you know you are "behind" by X number of commits.  A "fast-forward" merge is when you merge a branch that is ahead of your checked-out branch.  Look up "rebasing" for more info.  (Merging and Rebasing are the two main ways to integrate changes from one branch to another.)

1. In Sourcetree, click the "Pull" icon in the toolbar.
2. In the popup, select "Pull from repository `origin`, and remote branch `master`.
3. Click "OK."

You should no longer see any notifications about being behind by any number of commits.  You are up to date with all of your changes, which is the best state to be in.


## Accessing the Terminal from Sourcetree

Clicking the "Terminal" button in the top right of the Sourcetree UI will open your terminal in the exact filepath you're already in in Sourcetree.

## Practice

- Do the exercises in #50 of the Git Essentials course.
- Do the Atlassian Advanced Git Tutorials that are linked to in #58 of the Git Essentials course.