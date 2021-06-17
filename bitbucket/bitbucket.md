# Bitbucket

## Commits (Left-Hand UI Panel)

This allows you to see all of the commits by every team member who has published changes to this repository.


## Cloning

The `git clone` in the terminal command copies an existing Git repository to your local machine.

To clone in Bitbucket, click the `+` icon, then "Clone This Repository."


### HTTPS vs. SSH

HTTPS and SSH are protocols.  You have the option to use either one when cloning in Bitbucket.

(You can verify this by clicking the `+` icon in Bitbucket, then "Clone This Repository."  From there, you can select either HTTPS or SSH from the dropdown list.)

- HTTPS always verifies the server automatically using certificate authorities.  It is a little easier to learn than SSH.  But the downside is that you have to enter your Bitbucket credentials every time you want to run a command such as `push`.
- SSH uses public key authentication.  (You have to generate a public key and a private key.  The private key gets stored locally on your machine, and the public key gets uploaded to Bitbucket.)  Much more secure than passwords, but more likely to be blocked by a firewall compared to HTTPS.


#### HTTPS Cloning

Once you have an existing repository in Bitbucket:

1. Click the `+` icon.
2. Click "Clone This Repository."
3. Select HTTPS (as opposed to SSH) from the dropdown.
4. Copy the HTTPS string from Bitbucket.
5. In your terminal, navigate to the directory you want to clone the repository to in your local machine.
6. Paste the code you copied from Bitbucket and hit Enter.
7. You will be prompted to enter your password.  (It will not show while you are typing.)

NOTE: The cloning process took forever, and no status bar or percentage was displayed.


## Pushing to Bitbucket

To push your local changes up to your remote repository:

1. First make sure your local repository is up to date.  (Stage, commit.)
2. `git push origin master`.  This tells Git to push to the `master` branch, which is the branch on Bitbucket on `origin`, which is the Bitbucket server.

All of your commits will now be on the remote repository (aka `origin`).  Therefore, you should be able to see your commit in Bitbucket now.  Just return to the Bitbucket UI and click on "Commits" in the left side panel.

NOTE: If other team members have also contributed to the project, you will see their commits here, too.


## Source

Clicking "Source" in the left side panel will show you all the source files for the branch you're currently looking at.  (Use the dropdown to view other branches.)


## Adding a File via Bitbucket

1. While on the "Source" tab, click "New File" at the top right corner of the screen.
2. Create your file via the Bitbucket UI.  (For example, create a Markdown file and add some text to it.)
3. Save the new file.
4. In your terminal, pull the new file down to your local machine by running `git pull`.  This automatically fetches all of the files from the remote repository and merges them into your local repository.