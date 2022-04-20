# Using the Terminal

The terminal is a text-input way of controlling your computer, as opposed to a GUI (Graphic User Interface) such as the Explorer.


## Shell

A "shell" is terminal software -- a text-input interface.  The shell interprets our text input for the computer, so that it understands what we are telling it to do.

The Mac has two different shells: Bash (older) and Z-Shell (also called zsh) (newer).

Windows machines don't have the differentiation between the terminal and the shell.  There is the command prompt (cmd).  That is the traditional Windows shell.  If you open the command prompt, you open the hardware, which has the corresponding software on it.  PowerShell is a newer version of the command prompt.  It was released with Windows 7.  It looks very similar to the command prompt, but is very different.  It can take in different kinds of commands.  A third Windows option is Git Bash.  It is a Bash emulation for Windows.  It can give you a more similar experience if you're working on a Windows and Mac machine simultaneously.  It is not necessarily required to use Git.

To keep things simple, you can just use Command Prompt (cmd) on Windows.  It is a good starting point to learn the terminal; then you can dive into the PowerShell if required.

On Mac, you can just use Z-Shell.


## Directory Structure (Windows)

There are three core directories on a Windows machine:

1. Root Directory (C: Drive)
2. Users Directory (the folder literally named "Users")
3. Home Directory (each username directory within the Users directory)


## Relative vs. Absolute Paths

Relative Paths are the path you have to take starting from your current location within the directories.  (These are more commonly used in daily work.  And relative paths continue to work within a folder structure if you move the folder somewhere.  Therefore, it is recommended that you work with relative paths whenever possible.)

Absolute Paths are the full path from the root directory to the location you want to go to.  They start with a `/` for Mac or a `\` for Windows.