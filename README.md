# mean-stack
First MEAN stack project

## Walking Skeleton
1. End to End
2. Main architectural components
3. Iterative

## Module Agenda
1. package.json 
2. git
3. Bower
4. Node Server
5. Stylus
6. Layout
7. AngularJS
8. MongoDB

### package.json
`npm init`
This will walk you through setting up your package.json file

`npm install --save express jade`
This will install Express and Jade

### git
Save a file called `.gitignore` to the root directory of the project
Check what git is tracking with `git status`
Add .idea and node_modules to your .gitignore file
`git add -A` to add the files that are not in your .gitignore file to git for tracking
Make your first commit `git commit -m "my first commit"`

### Bower
`npm install bower --save-dev` type `bower --help` to make sure it's working. If not, try `npm install bower -g`, this will install it globally.
This saves it as a dev dependency
Save a file called `.bowerrc`, this will tell Bower where to install our client side dependancies
Edit `.bowerrc`
``` 
{
   "directory": "public/vendor"
}
```
Create Bower json file `bower init` accept all the default settings. You can go back and change them later if you want.
Mine looks something like this
```
{
  "name": "mean-stack",
  "version": "1.0.0",
  "authors": [
    "eriksjaastad <erik@logicdesigns.com>"
  ],
  "description": "First MEAN stack app",
  "homepage": "https://github.com/eriksjaastad/mean-stack",
  "license": "MIT",
  "private": true
}
```
Next install jQuery using Bower `bower install jquery --save` this will add jQuery to the bower.json file as a dependency and install it in `public/vendor/jquery`

Install Toaster with Bower, this will provide client side notifications. `bower install toaster --save`

Lastly, install Angular resources. `bower install angular angular-resource angular-route --save`

Open up your `bower.json` and see what happened. You'll also see all your dependancies in your `public/vendor/` directory.

### Directories
Make a directory called `server`, this is where our node source code, our Jade view and client-side partials
Make another directory called `public` will have our typical files

### Node
`npm install nodemon -g` to monitor changes so you don't have to restart the server
In the project root make `server.js`
inside `server` make a the views directory `mkdir server/views/`
Inside `views/` make `index.jade`
Add `server.js` to nodemon. In the command line from the root of your project type `nodemon server.js`. You should see nodemon tell you it's version, how to restart it, what it's watching, that it's starting to watch `node server.js` and that it's using port 3030 which we set up in the `server.js` file.

Go to `localhost:3030` in your browser and you should see your Hellow World statement.



