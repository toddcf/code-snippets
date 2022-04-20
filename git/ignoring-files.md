# Ignoring Files

You may have files in your directory that you do not want to upload to Git.  (For example, a video file that is too large and will get rejected due to file size every time.  Or a file with sensitive information that you do not want to post publicly on Git.)  You can tell Git to ignore these files and only track the remaining files.

You create a file called `.gitignore`.

NOTE: `.gitignore` will be a hidden file.  Typing `ls` will not show it.  You will have to use `ls -a` instead to confirm that it has been created.

Inside this file, you can list each file (on its own line) you want Git to ignore, like this:

```
example.log
sample.log
```

Or, instead of listing each file individually, you can tell Git to ignore any file with a certain extension.  In this example, we will tell Git to ignore all files with the `.log` extension rather than listing each one out specifically:

```
*.log
```

NOTE: You can safely add the `.gitignore` file itself to be tracked, like this:

`git add .gitignore`