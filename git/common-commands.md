# Common Git Commands

## Create and Clone

### From GitHub

1. Create a new repository on GitHub. (Initialize with README so there is something in the directory. Empty directories cannot be cloned.)
2. Copy the SSH link.
3. In the GitBash terminal, navigate to the directory in which you want the new repository to be cloned into.
4. Type `git clone _____` and then paste the SSH link. (Right-click the top bar of the GitBash terminal, then select `Edit > Paste`.)
  - Alternatively, type `git fetch origin _____`, and the branch you want, and it will download only that branch.
  - Then `git checkout ____` the new branch.
5. Confirm that the directory has been cloned to your local machine. (`cd` to the directory it should be in and type `ls`.)

## Push to GitHub

This is bare-bones -- working in and saving to your master branch (as opposed to working in multiple branches).

1. Confirm that you are in the branch you want to push.
2. `git add -A`. (Tells Git that this file exists.)
3. `git commit -m`.
4. `git push origin [branch]`. Branch could be `master` or whichever branch you are working in.

## Pulling From / Merging with Master

This is for when you are either working in a group project, or just want to be able to use different branches on different local machines and keep everything in sync.

1. `git checkout master`. You're going to pull everyone else's changes -- all the latest code.
2. `git add -A`.
3. `git commit -m "Preparing to pull."`.
4. `git pull`.
5. `git checkout [the branch you are working on]`.
6. `git merge master`.

## Pushing to Master in Group Projects

1. Always pull and merge first (see above), so that you are incorporating your team's changes.
2. Then push to your branch: `git push origin [your branch]`.
3. Go to GitHub and create a `pull request` FROM the branch you just pushed up TO the MASTER branch. It should be able to merge automatically.

The GitHub website may now tell you that `[your branch]` is 1 commit behind `master`. I think this is because after `git merge master`, I have been doing `git add -A` and `git commit -m` before `git push origin [your branch]`, and this is incorrect. It is adding an extra commit to `[your branch]` and causing things to be out of sync before you even run `git push origin [your branch]`. So make sure you just skip straight from `git merge master` to `git push origin [your branch]`. But in case the mistake has already benn made, here is my workaround (which is basically just repeating some of these same steps):

4. `git checkout master`.
5. `git add -A`.
6. `git commit -m "Merging with master again so I can push up [your branch]."`.
7. `git pull`.
8. `git checkout [your branch]`.
9. `git merge master`.
10. `git push origin [your branch]`.

After that, if you were just trying to get your master branch up to date with your `gh-pages` branch after accidentally making changes to your `gh-pages` branch (for example), also do the following:

4. `git checkout master`.
5. `git pull`.

## Upload to GH Pages

1. `cd` to the directory you want to host. (You must already have a connected GitHub remote.)
2. `git add -A`.
3. `git commmit -m`.
4. `git branch gh-pages`. (Creates a branch called `gh-pages`, which is what will be published to the web.)
5. `git checkout gh-pages`.
6. `git push origin gh-pages`. (Pushes this new branch up to GitHub.)
7. Wait about 15 minutes, then see your live site at http://`username`.github.io/`repository`.
8. `git checkout [working branch]` to make sure you don't accidentally continue editing on the live site!

### Keeping GH Pages up to Date After Changes Have Been Made on Master Branch

1. Make sure `master` branch is up to date using the methods above. (Stage, commit, push, etc.)
2. `git checkout gh-pages`.
3. `git merge master`.