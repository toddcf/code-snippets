# Troubleshooting Git

## When Branches Are X Number of Commmits Ahead and/or Behind Each Other

Example:

For code-snippets, I have the branches `personal`, `master`, and `fzauto`.

`personal` is 1 commit ahead of `master`, and 4 commits behind `master`.

Here's how I fixed it:

1. `git checkout personal`.
2. `git pull origin master`.
3. `git add -A`.
4. `git commit -m "Pulled master branch into personal branch on my local machine. Pushing personal branch back up."`.
5. `git push origin personal`.
6. On GitHub website: Created pull request and merged `personal` and `master`.
7. `personal` now said it was 1 commit behind master. So I repeated the process:
8. `git pull origin master`.
9. `git add -A`.
10. `git commit -m "Repeating process."`
11. `git push origin personal`.
12. Refresh GitHub web page. `personal` branch is now even with master! Success!!