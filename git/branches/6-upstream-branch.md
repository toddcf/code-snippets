# Upstream Branch

In `git push -u origin <branch_name>`, the `-u` stands for "upstream."

If you only run `git push origin <branch_name>` (without the `-u`), then you don't technically have a connection between the remote branch, remote tracking branch, and local tracking branch.  In which case you would have to create a local tracking branch manually.

So, running `git push -u origin <branch_name>` also creates a local tracking branch with this name that is the "upstream" branch connected to your local branch.