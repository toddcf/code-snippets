# Cloning vs. Forking a Repository

## Clone

Cloning a remote repository simply establishes a link between the remote repository (either your own or someone else's) and a copy of that repository on your local.  If anyone makes updates to the remote, you can pull/merge those changes to your local (cloned) repository.  Likewise, you can make changes on your local and push them to the remote.

Note that in order to clone a repository, you must be an owner, collaborator, or team member of the remote repository.  Therefore, this method is not often used when contributing to open source projects.


## Fork

*This is actually a GitHub feature, and is not related to Git at all.*

Forking a remote repository copies it into another remote repository on your GitHub account, which you can then copy onto your local machine.

Therefore, the changes you make on your local and push to the forked remote repository are not actually affecting the original remote repository that the fork was created from.  To merge your changes from the forked remote repository into the original remote repository, you would create Pull Request.  The original account owner will then review your changes before deciding whether or not to merge them in.  (With forking, reviews are required by default.)

This method is better for contributors to open source projects.

1. While signed into your GitHub account, navigate to the repository (someone else's) that you want to fork.
2. Click the "Fork" button.
3. Follow the on-screen instructions to fork the repository to your account.
4. Now clone the forked repo to your local and work on it there.
5. When you are done making changes, push them back up to your remote forked repository.
6. To merge the changes back into the original repository, raise a PR from the forked repo to the original repo.  Go to the original repository and click the "Pull Requests" tab.  Then click the "New Pull Request" button.
7. Rather than merge a branch from the original repo into said repo, click the "Compare across forks" link.  Select your fork (and its appropriate branch) from the dropdown menu.
8. Review the differences that you will be merging into the original repo.  If everything looks good, click the  "Create Pull Request" button.
9. Fill out the form with a title and comment.  If this change is related to an Issue, you can link to that Issue.  Then click the next "Create Pull Request" button.

From here, the owner of the original repository can review your changes.  They can either add comments if they have a question or suggestion, or they can approve the PR and merge it into their repo.