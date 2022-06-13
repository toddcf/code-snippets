# Tagging

If you want Git to know that a certain version of your codebase is version 1 (for example), you do this with "tagging."

There are two ways of tagging in Git:

1. Lightweight
2. Annotated

Annotated is preferable, because we know who created the tag.  This is the way we will do it.


## Annotated Tagging

Let's say it's the first version of your codebase.  You'll add a `v` number and a message (just like when you commit):

`git tag -a v1.0.0 -m "Version 1.0.0 release."`

NOTE: `v1.0.0` is the proper annotation structure, as it allows automated tools to inspect your package and know the release versions.


## Additional Info

*If you are not ready to add a tag to the `main` branch with a new version number of your app, you should not be merging into the `main` branch.*

This tag will point to the current commit.

If you want to view all of the local repository tags, type `git tag`.  (NOTE: I am not seeing the annotation, just the version number when I do this.)