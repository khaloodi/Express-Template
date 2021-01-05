# QuackAcademy Express Template

This is a turn-key ExpressJS repo, set up with KnexJS/PostgreSQL, users/authentication routers and error middleware.

You can use this to quickly launch an Express backend or to follow along with the deployment tutorials on QuackAcademy listed below.

## Deployment Tutorial Links
* [Heroku](https://www.quackacademy.com/curriculum/backend/09a-heroku)
* [AWS](https://www.quackacademy.com/curriculum/backend/09b-aws)
* [GCP](https://www.quackacademy.com/curriculum/backend/09c-gcp)

## Documentation:
[Endpoints](https://github.com//QuackAcademy/Express-Template/blob/master/Endpoints.md)

## Local deployment/repo specific instructions

Clone/fork/download the app, then install the dependencies by running:
```js
npm i
```
We'll be using nodemon to run the server locally- it restarts automatically on changes to files.
```js
npm run server
```
The included file zRunServer.sh will open a new terminal and run this command on double click.

### Environment Variables
These variables need to be defined in order for the program to function successfully.

If working locally, create a file called .env in the root folder. 

You'll store variables like so: //image?

Environment variables are secret and should never be pushed to github. 

Ensure that *.env is listed in your .gitignore file to prevent this.

//list of env vars needing updates

### Creating and seeding the database
To create a local sqlite3 database, install knex:
```js
npm install -g knex
```
And then run:
```js
knex migrate:latest
```
You can also use npx to run the command without installing knex:
```js
npx knex migrate:latest
```
Now fill the database with seed data:
```js
knex seed:run
```

### Testing functionality
Let's call some endpoints with Insomnia (Or Postman) to make sure everything is working correctly.