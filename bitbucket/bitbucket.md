# Bitbucket


## Commits (Left-Hand UI Panel)

This allows you to see all of the commits by every team member who has published changes to this repository.


## Creating a Repository in Bitbucket

1. Click the `+` icon in the left side panel.
2. Choose "Repository."
3. Type in the name for your repository.
4. Select "Git" for version control.
5. Click "Create Repository."

After this, to clone this repository to your local, see the cloning instructions below.


## Cloning

The `git clone` in the terminal command copies an existing Git repository to your local machine.  To clone in Bitbucket:

1. Click the `+` icon, then "Clone This Repository."


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
4. Copy the HTTPS string from Bitbucket.  (Will probably say `git remote add origin`, followed by the link.  Setting this remote now means you don't have to keep entering the link every time you push to the remote in the future.)
5. In your terminal, navigate to the directory you want to clone the repository to in your local machine.
6. Paste the code you copied from Bitbucket and hit Enter.
7. You will be prompted to enter your password.  (It will not show while you are typing.)

NOTE: The cloning process took forever (literally never finished), and no status bar or percentage was displayed.


### SSH Cloning

To generate an SSH key, see [SSH notes](https://github.com/toddcf/code-snippets/blob/master/ssh/ssh.md).  Once you have your public and private key pair, resume here:

1. If you have just created your key in the command line, copy it to your clipboard by typing:
  a. Windows: `clip < ~/.ssh/id_rsa.pub`
  b. Mac: `pbcopy < ~/.ssh/id_rsa.pub`
  c. Linux: `cat < ~/.ssh/id_rsa.pub`
2. In Bitbucket, click `Settings` > `Bitbucket Settings` > `SSH Keys` > `Add Key`
3. Paste your public key here.
4. The label can be anything you want.  NOTE: Once a key has been saved to Bitbucket, you can update the label name, but not the key itself.  (If you do need to modify it, delete the entire key and re-add it.)
5. Click "Add Key."  Bitbucket will send you a confirmation email.
6. Confirm your configuration by going back to the terminal and typing `ssh -T git@bitbucket.org`.  (And type `yes` when prompted to continue.)

Once you have an SSH key is configured with Bitbucket, you can copy the SSH link instead of the HTTPS link when cloning:

1. Click the `+` icon.
2. Click "Clone This Repository."
3. Select SSH (as opposed to HTTPS) from the dropdown.
4. Copy the SSH string from Bitbucket.
5. In your terminal, navigate to the directory you want to clone the repository to in your local machine.
6. Paste the code you copied from Bitbucket and hit Enter.
7. If you previously set SSH to require a passphrase, you will be prompted for it here.  (It will not show while you are typing.)


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


## Pushing to Bitbucket via Sourcetree

See [Sourcetree notes](https://github.com/toddcf/code-snippets/blob/master/sourcetree/sourcetree.md).


## Pulling to Bitbucket via Sourcetree

See [Sourcetree notes](https://github.com/toddcf/code-snippets/blob/master/sourcetree/sourcetree.md).