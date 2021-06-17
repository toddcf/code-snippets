# SSH


## Generating an SSH Key

1. In your terminal, run `ssh-keygen`.
2. Most likely, you will want to save the key in the default location.  (If so, hit Enter.)
3. If you want to add an additional layer of security, enter a passphrase.
4. To confirm that both the public and private keys have been generated, run `ls ~/.ssh`.  (NOTE: The `~` symbol refers to the home directory of the logged-on user.)

NOTE: The private key should only be stored locally.  Your public key will be stored on places like GitHub, Bitbucket, etc.  The two keys communicate to properly authenticate you.