# Git Setup

1. Download Git from https://git-scm.com/.
2. Follow the installation prompts.
  -  When selecting the different components to install, leave all default settings, but the "Git & GitHub - The Practical Guide" tutorial recommends unchecking the "Windows Explorer Integration" box if you want to skip Git Bash and learn Git from a command line perspective.
  - And when selecting the default editor for Git, you can leave it as Vim for the same reason.
  - PATH Environment can be set to command line and also third-party software.
  - HTTPS transport backend can be set to OpenSSL Library.
  - Line Ending Conversions: If Windows, select "Checkout Windows-style, commit Unix-style line endings" so that you have compatibility with other developers who might be working on the same project on a Mac.
  - Terminal Emulator: Use MinTTY.
  - Git Pull: Default (fast-forward or merge).
  - Extra Options: Enable file system caching.
  - Experimantal Options: none.
3. Confirm Successful Installation:
  - Click the Windows icon and search for `cmd`.
  - Open the Command Prompt.
  - As a test, type `git --version` and hit Enter.
  - If the installation was successful, you will see a version number.


## Updating Git

Here is how to update Git to the latest version if it is already installed:

1. Check which version you have by running `git --version` in the command line.  Compare this to the latest stable version number on https://git-scm.com/.


## Visual Studio Code

A quick note about installing Visual Studio Code: You'll want the "Add to PATH" box checked so that you can use the terminal from inside VS Code.


## Add Your Credentials

Your email address and name must be added for account identity so that we know who has made which changes.  (It will become messy if everyone can just anonymously add commits.)

Navigate to your repository and run the following in your terminal:

`git config --global user.email "you@example.com"`
`git config --global user.name "First Last"`

NOTE: The `--global` flag will set this information for all repositories on your machine.  If you omit this flag, it will only set this information for the project you are currently in.






### Username

Check if your username is set correctly:

`git config user.name`

If this does not output your name, set it as follows:

`git config -- global user.name "Todd Croak-Falen"` (with your name in the quotes).

Then run the check again to confirm that it has been set.


### Email

Check if your email is set correctly:

`git config user.email`

IMPORTANT: if you are going to use Git with Bitbucket, this must be the same email address you use to sign into Bitbucket.

If this does not output your email, set it as follows:

`git config -- global user.email "test@test.com"` (with your name in the quotes).

Then run the check again to confirm that it has been set.