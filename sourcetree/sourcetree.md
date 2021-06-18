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


## Branching in Sourcetree

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