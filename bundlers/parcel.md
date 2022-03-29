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