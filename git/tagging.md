# Tagging

Tagging is used to note certain milestones in your codebase, such as version numbers.  (Whenever you publish a new version of your website, you should tag it.)

There are two ways of tagging in Git:

1. Lightweight (A simple pointer to a commit in a branch.)
2. Annotated (A full object in Git, containing information such as the email address of the person who added this tag.)

Annotated is preferable, because we know who created the tag.  This is the way we will do it.


## Annotated Tagging (Preferable)

Let's say it's the first version of your codebase.  You'll add a `v` number and a message (just like when you commit):

`git tag -a v1.0.0 -m "Version 1.0.0 release."`

NOTE: `v1.0.0` is the proper annotation structure, as it allows automated tools to inspect your package and know the release versions.


## Lightweight Tagging (Less Preferable)

1. Copy the commit id you want to tag.
2. Run `git tag <version number> <commit id>`, typing in the version number you want to assign to this tag.


## View / Checkout Tags

- `git tag` will display a list of tags for your project.
- `git show <version number>` will show the entire object.  (Commits are objects.)
- `git checkout <version number>` will revert you to the status of your project at the time of that tag.  This will put you into [detached HEAD](head/2-detached-head.md) mode.


## Remove Tags

- To remove a lightweight tag: `git tag -d <version number>`


## Additional Info

*If you are not ready to add a tag to the `main` branch with a new version number of your app, you should not be merging into the `main` branch.*

This tag will point to the current commit.

If you want to view all of the local repository tags, type `git tag`.  (NOTE: I am not seeing the annotation, just the version number when I do this.)