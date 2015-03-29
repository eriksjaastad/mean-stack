# mean-stack
First MEAN stack project<br>
From Joe Eams<br>
https://www.codeschool.com/pluralsight-courses/building-angularjs-and-node-js-apps-with-the-mean-stack

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
`npm init`<br>
This will walk you through setting up your package.json file<br>
`npm install --save express jade`<br>
This will install Express and Jade<br>

### git
Save a file called `.gitignore` to the root directory of the project<br>
Check what git is tracking with `git status`<br>
Add .idea and node_modules to your .gitignore file<br>
`git add -A` to add the files that are not in your .gitignore file to git for tracking<br>
Make your first commit `git commit -m "my first commit"`<br>

### Bower
`npm install bower --save-dev` type `bower --help` to make sure it's working. If not, try `npm install bower -g`, this will install it globally.<br>
This saves it as a dev dependency<br>
Save a file called `.bowerrc`, this will tell Bower where to install our client side dependancies<br>
Edit the file `.bowerrc`
``` 
{
   "directory": "public/vendor"
}
```
Create Bower json file `bower init` accept all the default settings. You can go back and change them later if you want.<br>
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

### Node Server
`npm install nodemon -g` to monitor changes so you don't have to restart the server<br>
In the project root make `server.js`<br>
inside `server` make a the views directory `mkdir server/views/`<br>
Inside `views/` make `index.jade`<br>
Add `server.js` to nodemon. In the command line from the root of your project type `nodemon server.js`. You should see nodemon tell you it's version, how to restart it, what it's watching, that it's starting to watch `node server.js` and that it's using port 3030 which we set up in the `server.js` file.

Go to `localhost:3030` in your browser and you should see your Hellow World statement.

### Stylus
Add `stylus = require('stylus')` to the var at the top of `server.js`<br>
Make the file `public/css/site.styl`<br>
And the following code to `server.js` below `app.use(bodyParser.urlencoded({extended: true}));`
```
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));
```

### Layout
For the layout I'm using jade files<br>
`server/includes/layout.jade` and `server/includes/scripts.jade`<br>
And the partials as well<br>
`server/views/partials/main.jade`<br>
And set the routing in `server.js`. Under `app.use(express.static(__dirname + '/public'));` put in this code
```
app.get('/partials/:partialPath', function(req, res) {
	res.render('partials/' + req.params.partialPath);
});
```

### Angular
Make a file called `app.js` in `public/app/`<br>
Here we set the resource and the route<br>
In `server/includes/layout.jade` I had to include `base(href="/")` in the head and the add `(ng-app='app')` to the body and define a block for the main content witn `block main-content` inside the body

### MongoDB
I used Homebrew http://brew.sh/ <br>
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`<br>
to set up MongoDB http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/ <br>
Find the MongoDB set up that works for you.<br>
Run `brew update` and the `brew install mongodb`<br>
Homebrew hid a feature we're going to need.<br>
`curl -o /usr/local/bin/brew-services.rb https://gist.githubusercontent.com/lwe/766293/raw/75a7907004bbff0eb3b072d1d951be2cfe7e5020/brew-services.rb`<br>
`chmod +x /usr/local/bin/brew-services.rb`<br>
Check to make sure it worked: `brew services help`<br>
Install Mongoose `npm install mongoose --save`<br>
Add the mongoose module to `server.js` below `bodyParser` add `mongoose = require('mongoose');` <br>
Below the config section in `server.js` add the database connection and set it to a variable<br>
I called my database `mean-stack`<br>
```
mongoose.connect('mongodb://localhost/mean-stack'); 
var db = mongoose.connection;
```
Below this add some error handling
```
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('mean-stack, db opened');
});
```
Start Mongo: `mongo`<br>
Restart the sever: `nodemon server.js`and check for errors<br>
The last thing you should see when the server starts is `meant-stack db opened`<br>
Below the error handeling add
```
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
	mongoMessage = messageDoc.message;
});
```
In `server/views/index.jade` below `div(ng-view)` add `h2= mongoMessage`<br>
In the terminal open the Mongo shell by typing `mongo`<br>
Switch to the database you want to use `use mean-stack`<br>
`db.messages.insert({message: 'Hello Mongo'})`<br>
If your server isn't running still `nodemon server.js` and reload your page in the browser

Now all the major components are working!!!!

After setting up the remote database connection I had a problem with my local connection (errno:61 Connection refused)... These are the steps I took.
1. `brew uninstall mongodb` Uninstall MongoDB
2. `brew update` update Homebrew
3. `brew install mongodb` reinstall MongoDB
4. `sudo mongod` This runs Mongo as root and gives it permission to the mongod.lock file.
5. Open a new tab in your Terminal
6. `mongo` this should get everything up and running locally again
7. In a 3rd tab, run `nodemon server.js`
