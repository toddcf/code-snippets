# Ignore

You may have files in your directory that you do not want to upload to Git.  (For example, a video file that is too large and will get rejected due to file size every time.  Or a file with sensitive information that you do not want to post publicly on Git.)  You can tell Git to ignore these files and only track the remaining files.

You create a file called `.gitignore`.

NOTE: `.gitignore` will be a hidden file.  Typing `ls` will not show it.  You will have to use `ls -a` instead to confirm that it has been created.

Inside this file, you can list each file (on its own line) you want Git to ignore, like this:

```
example.log
sample.log
```


## Ignoring File Types

Or, instead of listing each file individually, you can tell Git to ignore any file with a certain extension.  For example, you can tell Git to ignore all files with the `.log` extension rather than listing each one out specifically by using an asterisk:

```
*.log
```


## Exceptions to Ignoring File Types

Maybe you want to ignore all `.log` files *except* for one.  You can program an exception, like this:

```
*.log
!example.log
```

This will ignore all `.log` files except for the `example.log` file.


## Ignoring Folders

If you want to ignore a folder plus all of its contents, simply write out its pathname starting at your repository's root directory and then add a `/*` at the end.  For example, if you have a folder called `web-app` in the root directory, you would ignore that folder plus its contents like this:

```
web-app/*
```

QUESTION: What happens if you leave off the asterisk?  Also, can you write an exception for one of the files inside the folder, such as `!web-app/index.html`?


## Tracking .gitignore

You can safely add the `.gitignore` file itself to be tracked, like this:

`git add .gitignore`


## Global .gitignore File

You can create a global `.gitignore` file that will apply to all of your Git-managed projects.  May add notes on this later.


## Comments

Comments must start at the beginning of a line, and are denoted with a hashtag and a space:

```
# Ignore all .log files:
*.log
```