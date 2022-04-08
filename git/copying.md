# Copying Files in the Command Line

Let's say you have this file structure:

- zz
  - copied
  - data
    - index.html
    - more-data
    - styles.css
  - moved


## Copying a Single File

Let's say you're in the `zz` directory in your terminal, and you want to copy `index.html` into the `copied` folder.  You would run `cp` for copy, followed by the source path (from), followed by the target path (to).  Like this:

`cp data/index.html copied`


## Copying Multiple Files

Let's say you're in the `zz` directory in your terminal, and you want to copy multiple files.  You can't just list them out like you do when you create them with `touch`.  You have to name the source and target *directories* that contain them, each appended with a `/`.  You include the `-r` flag (which stands for recursive, meaning it will include all files inside that directory).

`cp -r data/ copied/`

You *need* that slash after `data` so that it knows it's an existing folder.  This way, it will copy the *contents* of the folder but not the folder itself.  Without the slash, it will create another folder by that name inside the target directory.