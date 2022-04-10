# Installing Git

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