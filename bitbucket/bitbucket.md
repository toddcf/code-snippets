# Bitbucket

## Commits (Left-Hand UI Panel)

This allows you to see all of the commits by every team member who has published changes to this repository.


## Cloning


### HTTPS vs. SSH

HTTPS and SSH are protocols.  You have the option to use either one when cloning in Bitbucket.

You can verify this by clicking the `+` icon in Bitbucket, then "Clone This Repository."  From there, you can select either HTTPS or SSH from the dropdown list.

- HTTPS always verifies the server automatically using certificate authorities.  It is a little easier to learn than SSH.  But the downside is that you have to enter your Bitbucket credentials every time you want to run a command such as `push`.
- SSH uses public key authentication.  (You have to generate a public key and a private key.  The private key gets stored locally on your machine, and the public key gets uploaded to Bitbucket.)  Much more secure than passwords, but more likely to be blocked by a firewall compared to HTTPS.