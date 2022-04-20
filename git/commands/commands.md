# Commands

## Add

`git add <filename>` adds one or more files to the staging (index).  This means that this file will now be tracked by Git.

You can also use `git add -A` to automatically add only files that are new or edited.  Using this method, you do not need to list out each file specifically, and any files that are unchanged will be ignored.  ALSO: Any files that have been removed from the working directory will now be removed from the local repository.

Or you can use `git add .` to begin tracking all of the untracked files.

NOTE: Files must be added before they are committed.


## Commit

A commit records changes to the repository.

To add a descriptive message so that you have a record of what changes are being made with each commit, use `git commit -m <message here>`.  *This is a very important best practice.*  Keep these messages clear and concise, and write them in the present tense.  They will show up as the title of each commit, and will provide you with an easy-to-read chronological list of the changes that have been made to the repository over time.  You want other people -- not just you -- to be able to see what has been done.

NOTE: Files must be added before they are committed.

More info: https://git-scm.com/docs/git-commit


## Log

`git log` will show a list of the commits you've made (with their messages), in descending order.


TROUBLESHOOTING:

Sometimes running `git log` takes a long time, and you are unable to run other commands while you wait.  If you want to cancel the process, it is best to use `q` (as opposed to `CTRL + C`).

If you have already used `CTRL + C`, sometimes GitBash will have a bug where you can type but it won't display.  If this happens, type `reset` and hit `Enter`.


## Status

`git status` allows you to see which files you've changed, and which you still need to add or commit.


## pwd

"Print Working Directory."  Will tell you where you are.


## cd

`cd` navigates you to a different directory.

`cd <directory name>` will move you into the child directory of your choice.

`cd ..` moves you up one directory level.  (In other words, into the parent folder of the folder you were just in.)


## mkdir

Creates a directory (folder).

For example, `mkdir project-name` creates a folder called `project-name`.


## touch

Creates a file.  Needs to include the filetype extension.

For example, `touch git-essentials.md` was used to create this markdown (.md) file.


## Deleting Files and Directories

Remove, or `rm` is used to delete *files* (not directories).

For example, `rm git-essentials.md` would delete this file.

Remove Directory, or `rmdir`, is used to delete entire *directories* (as opposed to individual files).


## ls

`ls` lists all the child directories and files inside your current directory location.

Useful for seeing your options to navigate to or delete, or to confirm that the `mkdir` or `touch` you just ran created the directory or file you wanted.

NOTE: `ls` will not show hidden directories and files.  To also see hidden directories and files, use `ls -a`.


## diff

If you have unstaged files and can't remember what the changes were, `git diff <file name>` can show you.

NOTE: You can type `git diff` without the file name, but this will show all the files with differences, which can clutter your terminal window.


## clear

`clear` empties out your terminal window if it's gotten too cluttered.





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


## Further Command References

- Full List of Windows Commands: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands
- Full List of PowerShell Commands: https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7
- Keyboard Shortcuts in Terminal on Mac: https://support.apple.com/guide/terminal/keyboard-shortcuts-trmlshtcts/2.10/mac/10.15