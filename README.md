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



## To start the app

`npm install -g webpack`

`npm install`

`npm run react-dev`

`npm run server-dev`


