# Parcel


## Installing Parcel

While you can install npm packages such as Parcel globally, it is a good idea to install it locally (to your specific project) if your project is going to go on for more than a couple days.  That way, anyone who downloads the project from Github, etc. uses the exact same version of Parcel as you and it's easy for them to get up and running just by typing `npm start`.

Run `npm install parcel-bundler --save-dev`.  That last part saves it as a Dev dependency.  This means it will be saved as a dependency in your `package.json` file.  (A dependency is something that is not needed for the application to run, but is needed for someone to work on the application.)

In order to run Parcel, you have to add a script that will use it.  If you just type `parcel index.html` into your command line and hit enter, it will run, but it's going to use your global installation.  To use the local installation, run it as an npm script instead by adding `parcel index.html` to your `package.json` "scripts":

```
"scripts": {
  "start": "parcel index.html"
}
```

That will be your entry point.  After that, you can just run `npm start` in your terminal, and that in turn will run `scripts.start`.

The terminal will show you which localhost it's running on.  Point your browser to that.


## Issue if Running Async Await

If you have `async` `await` in your files, you'll get a console error at this point.  To get around that, add the following to your `package.json`:

```
"browserslist": ["last 1 chrome versions"]
```

Note that these need to be in double quotes, not single.


## Troubleshooting

If you run into trouble, you can try clearing your Parcel cache.  From your project location in the terminal, run `open .`.  In the Explorer window that pops up, find your `cache` and `dist` folders.  These are directories created by Parcel.  It's safe to just delete them both and then re-run `npm start` in your terminal.  The folders will be regenerated anew.

Also, sometimes the `type="module"` attribute in the script tag causes a problem when you compile with Parcel.  If this happens, just delete that attribute from the script tags before running the Parcel build.

NOTE: Parcel works better with React and Vue than it does with vanilla JS.


## Running a Build

Once you are done developing and it's time to run a build (a compiled version of your JavaScript file), add another script in your `package.json` folder, inside the "scripts" object (along with the "start" script):

```
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Then in your terminal, run `npm run build`.

Note that you will be running a build every single time you change your application.

Whenever you run a build, Parcel will only run it on the files that have changed.  If a file has changed, it will give it a new filename.  (The gibberish characters -- the random key for cachebusting -- will be different.)