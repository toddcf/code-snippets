# Moving -- or Renaming -- Files and Directories

This is very similar to copying, except you can't use the `-r` flag to move the multiple files at the same time.  (You can move an entire folder and its contents, but you can't move just its entire set of contents and leave the empty folder there.)


## Moving a Single File

Let's say you have this file structure:

- zz
  - copied
  - data
    - index.html
    - more-data
    - styles.css
  - moved

And let's say you want to move the `index.html` file into the `moved` folder:

`mv data/index.html moved/`

Just like with copying, you need the `/` appended to the target directory so it knows it already exists.


## Moving an Entire Directory

Now let's say you want to move the entire `more-data` folder into the `moved` folder, as well:

`mv data/more-data moved/`

Again, make sure to append that `/` to the target directory.


## Renaming a File or Directory

To rename a file or directory, you "move" it from the old name to the new name.  Let's say you want to rename `styles.css` to `style.css`:

`mv styles.css style.css`

