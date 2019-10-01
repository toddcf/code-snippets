# Form Security

On the browser side, a form is never totally secure. Hackers can add scripts to your form, or make their own form that submits to your server. So don't rely on browser validation such as filetype. The server should also be checking to make sure it's not receiving an executable file.

The server should also check to see that the data is in the format it's expected to be in.