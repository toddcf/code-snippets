# Git Overview

The official Git website is https://git-scm.com/.

Git is only local, however.  The full power of Git is when you sync it with a cloud account -- such as [GitHub](https://github.com/) or [Bitbucket](https://bitbucket.org/).  This allows you not only a backup copy in case your local crashes, but also allows multiple users to access and edit the files.  Or it allows the same user to access their code from another computer.

A Git repository is a Git-managed project.

Git and GitHub work extremely well together, but they are two different services.


## Using the Terminal

The terminal is a text-input way of controlling your computer, as opposed to a GUI (Graphic User Interface) such as the Explorer.


### Shell

A "shell" is terminal software -- a text-input interface.  The shell interprets our text input for the computer, so that it understands what we are telling it to do.

The Mac has two different shells: Bash (older) and Z-Shell (also called zsh) (newer).

Windows machines don't have the differentiation between the terminal and the shell.  There is the command prompt (cmd).  That is the traditional Windows shell.  If you open the command prompt, you open the hardware, which has the corresponding software on it.  PowerShell is a newer version of the command prompt.  It was released with Windows 7.  It looks very similar to the command prompt, but is very different.  It can take in different kinds of commands.  A third Windows option is Git Bash.  It is a Bash emulation for Windows.  It can give you a more similar experience if you're working on a Windows and Mac machine simultaneously.  It is not necessarily required to use Git.

To keep things simple, you can just use Command Prompt (cmd) on Windows.  It is a good starting point to learn the terminal; then you can dive into the PowerShell if required.

On Mac, you can just use Z-Shell.


## Helpful Commands

- `pwd` = print working directory.  Tells you where you are.  (Prints the absolute path (not relative path).)
- `ls` = list items.  Tells you all the items in your current directory.
- `cd` = change directory.  Type this, followed by the directory you want to navigate to, to go there.
  - `cd ..` = move up one directory level.
  - `cd /` = navigate to the root (top level) directory.
  - `cd ~` = navigate to home directory.  (I believe this means your user directory.)
- `clear` = clear the terminal.  You still have access to your previous commands if you scroll up.
- `mkdir` = make directory (create folder).
- `touch` = create file.  (Refers to "touching" a file and changing the date it was last "touched" -- but if `touch` can't find that filename, it simply creates a new one.  So this is a kind of "misuse" of this feature if you use it to create new files, but that's how it's done.)
- `rm` = delete a *file*.  (Permanently.  There is no confirmation warning first, and your files do not get moved to the trash -- they are gone.)
- `rmdir` = delete a *directory*.  (Only works if the directory is empty.  This is a safeguard.)
- `rmdir -r` or `rmdir -R` = delete a directory *plus its contents*.  (But this is risky and should almost never be used, especially when you're beginning.)  The `r` or `R` flag (more on flags below) stands for "recursive," and it just means it will include the entire contents of the folder in question.
- `\` = space.  This is used if a file or directory name contains a space.  You must "escape" the space before you type it.
- `cp` = copy.  Followed by the source path (from), then the target path (to).  (See separate document for further instructions.)

The `~` symbol next to a directory name indicates you that you are currently in that directory.

`Ctrl` + `q` quits your existing terminal.


## Relative vs. Absolute Paths

Relative Paths are the path you have to take starting from your current location within the directories.  (These are more commonly used in daily work.  And relative paths continue to work within a folder structure if you move the folder somewhere.  Therefore, it is recommended that you work with relative paths whenever possible.)

Absolute Paths are the full path from the root directory to the location you want to go to.  They start with a `/`.


## Flags

Flags allow you to add options to your commands.

For example, you can dictate how you want the contents of a folder to be displayed in the terminal:

- `ls -s` will display the filesize of each file.
- `ls -l` will display the "long format" of each file.
- `ls -ls` will do both flags at once.

To see the full list, run `man ls` in the terminal.  This is short for "manual" plus the command you want to see the manual for.  It will display the documentation for that command.