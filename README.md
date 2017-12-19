# Romp
## A web app for gamers!

### To start: 

Run the following command to run Romp on your localhost:

```
npm start
```

### Connecting to Database
This application uses mLab to host its MongoDB database. To host a database, sign up on mLab and create a new database.  Copy the URI located on the top level of your database. It looks like this:

```
mongodb://<dbuser>:<dbpassword>@ds123456.mlab.com:12345/<database>
```

In the 'db' folder, there is a file called 'mongo.example.js'. Create a copy of 'mongo.example.js' and rename it to 'mongo.js', so the .gitignore recognizes it and prevents an accidental push. In the file 'mongo.js', paste the URI you copied from mLab into it and replace the \<dbuser> and \<dbpassword>, including the brackets, with your username and password to that database.

Enjoy!






# react-starter
Simple Boilerplate for React Project

## To start the app

`npm install -g webpack`

`npm install`

`npm run react-dev`

`npm run server-dev`







# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
