# Cloning vs. Forking a Repository

## Clone

Cloning a remote repository simply establishes a link between the remote repository (either your own or someone else's) and a copy of that repository on your local.  If anyone makes updates to the remote, you can pull/merge those changes to your local (cloned) repository.  Likewise, you can make changes on your local and push them to the remote.

Note that in order to clone a repository, you must be an owner, collaborator, or team member of the remote repository.  Therefore, this method is not often used when contributing to open source projects.


## Fork

*This is actually a GitHub feature, and is not related to Git at all.*

Forking a remote repository copies it into another remote repository on your GitHub account, which you can then copy onto your local machine.

Therefore, the changes you make on your local and push to the forked remote repository are not actually affecting the original remote repository that the fork was created from.  To merge your changes from the forked remote repository into the original remote repository, you would create Pull Request.  The original account owner will then review your changes before deciding whether or not to merge them in.  (With forking, reviews are required by default.)

This method is better for contributors to open source projects.