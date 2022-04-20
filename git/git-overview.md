# Git Overview

The official Git website is https://git-scm.com/.

Git is only local, however.  The full power of Git is when you sync it with a cloud account -- such as [GitHub](https://github.com/) or [Bitbucket](https://bitbucket.org/).  This allows you not only a backup copy in case your local crashes, but also allows multiple users to access and edit the files.  Or it allows the same user to access their code from another computer.

A Git repository is a Git-managed project.

Git and GitHub work extremely well together, but they are two different services.

Git *tracks changes* to your project; it does not store the same files again and again.


## Using the Terminal

The terminal is a text-input way of controlling your computer, as opposed to a GUI (Graphic User Interface) such as the Explorer.


### Shell

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


## Helpful Commands

- `pwd` = print working directory.  Tells you where you are.  (Prints the absolute path (not relative path).)  (If you are using Windows cmd terminal, `cd` will accomplish this instead.)
- `ls` or `dir` = list items.  Tells you all the items in your current directory.  `dir` lists the files and folders in columns, sorted vertically and with special characters represented by `\` backslash escape sequences.  `ls` does the same, but color-codes the output in the terminal.
- `cd` = change directory.  Type this, followed by the directory you want to navigate to, to go there.  (If you are using Windows cmd terminal, `cd` is the equivalent of `pwd`.)
  - `cd ..` = move up one directory level.
  - `cd /` = navigate to the root (top level) directory.
  - `cd ~` = navigate to home directory.  (The first directory you have when you select a specific user.)
- `cls` (Windows) or `clear` (Mac) = clear the terminal.  You still have access to your previous commands if you scroll up.
- `echo` = create file, along with content, then `>`, then the filename.  `echo our first file > test.txt`
- `mkdir` = make directory (create folder).
- `touch` = create file.  (Refers to "touching" a file and changing the date it was last "touched" -- but if `touch` can't find that filename, it simply creates a new one.  So this is a kind of "misuse" of this feature if you use it to create new files, but that's how it's done.)
- `del` = delete a file (in the cmd terminal).
- `rm` = delete a *file*.  (Permanently.  There is no confirmation warning first, and your files do not get moved to the trash -- they are gone.)
- `rmdir` = delete a *directory*.  (Only works if the directory is empty.  This is a safeguard.)
- `rmdir -r` or `rmdir -R` = delete a directory *plus its contents*.  (But this is risky and should almost never be used, especially when you're beginning.)  The `r` or `R` flag (more on flags below) stands for "recursive," and it just means it will include the entire contents of the folder in question.
- `\` = space.  This is used if a file or directory name contains a space.  You must "escape" the space before you type it.
- [`cp` or `copy` (Windows cmd)](copying.md) = copy.  Followed by the source path (from), then the target path (to).
- [`mv` or `move` (Windows cmd)](moving-or-renaming.md) = move.
- `git status` = tells you information about your repository.  (Whether or not it exists, what branch you are on, whether or not the files it contains are being tracked.)
- [`git branch`](branches.md) = see list of all branches for your current repository on your local machine.
- [`git log`](git-log.md) = shows commit history.  (To exit the log, press `q`, then `Enter`.)

The `~` symbol next to a directory name indicates you that you are currently in that directory.

`Ctrl` + `q` quits your existing terminal.

NOTE: If you are referencing the name of a directory or file in the command line that has a space, you must wrap the name in double quotes, like this: `"Creative Writing"`.

- Full List of Windows Commands: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands
- Full List of PowerShell Commands: https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7
- Keyboard Shortcuts in Terminal on Mac: https://support.apple.com/guide/terminal/keyboard-shortcuts-trmlshtcts/2.10/mac/10.15


## Relative vs. Absolute Paths

Relative Paths are the path you have to take starting from your current location within the directories.  (These are more commonly used in daily work.  And relative paths continue to work within a folder structure if you move the folder somewhere.  Therefore, it is recommended that you work with relative paths whenever possible.)

Absolute Paths are the full path from the root directory to the location you want to go to.  They start with a `/` for Mac or a `\` for Windows.


## Flags

Flags allow you to add options to your commands.

For example, you can dictate how you want the contents of a folder to be displayed in the terminal:

- `ls -s` will display the filesize of each file.
- `ls -l` will display the "long format" of each file.
- `ls -ls` will do both flags at once.

To see the full list, run `man ls` in the terminal.  This is short for "manual" plus the command you want to see the manual for.  It will display the documentation for that command.


## Terminology

- Working Directory (aka Tree): A folder that is being managed by Git that contains all the files and subfolders for your project.
- Commit: A snapshot of your project at a given moment.  Each commit does not re-save the entire file; it only saves the *changes* that were made to the file.  (The initial commit will of course store all of the files, but after that, only the changes are stored.)
- Branch: A set of changes, kept separate from other sets of changes in other branches.  The `main` branch is typically the production (live) branch.  Since you don't want to make changes to that until you are sure they will not break the site, you create separate branches to work on until you know they are ready to merge into `main`.  This even allows multiple developers to work on changes in parellel without blocking each other.


## How Git Tracks Changes

When you turn a folder into a Working Directory, Git creates a hidden folder called `.git` that stores all the logic for the changes you make and branch each of those changes belongs to.  This is a *repository*.  The Working Directory is all the actual project files.  The Repository is the version control logic.

The Repository contains two main areas:

1. Staging.  This is basically an `index` file.
2. Commits.  This is an objects folder containing the different commits (snapshots).

Staging is where changes are stored to tell Git that they should be included in the next commit.  (You might have a hundred files, but only have a couple of them in staging because you didn't make changes to the rest.)

Once all your changes are added to Staging, you commit those changes and they become tracked by Git.

You can jump back to previous commits if you need to.  (See [Reverting Changes](reverting-changes.md).)