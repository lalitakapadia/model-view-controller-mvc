
# tech-blog-mvc

##Description
This project follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language to deliver HTML pages to a client browser, Sequelize as the ORM, and the express-session npm package for authentication. It enables users to interact with a server-side relational database (MySQL) through npm express routes to create, update and view blog posts, and submit comments to other blog posts.
For adding comments to the post user needs to sign up and then login to the app. and it has required minimun 8 characters for password. Once user is logged in then they can create a post, update post, delete post. but cannot make any changes on others users posts.

## Installation
Clone the repo to a local machine with Node JS and MySQL installed.
Run npm install to install required packages.
Run the ./db/schema.sql script to create the database.
Run npm run seed to populate the database with basic data.
Run npm start to start a listening Node instance.

## Usage
Provide instructions and examples for use. Include screenshots as needed.

Browse to http://localhost:3001 to access the main page
Create a new user account
Use the links and forms to create and manage blog posts and comments.

Link for github repo and deployed in heroku

https://github.com/lalitakapadia/tech-blog-mvc.git

![Alt text](/screenshots/main-page.png)

![Alt text](/screenshots/login-signup.png)

![Alt text](/screenshots/logged-in.png)

![Alt text](/screenshots/create-post.png)

![Alt text](/screenshots/no-posts.png)



