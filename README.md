
# Atlys-Backend 💡

## Overview 📹

This is an assignment task provided by Atlys. For Backend I have used Nodejs , ExpressJs , Javascript and MongoDB.Follow the guide below to install the application to your desktop and run it locally.
[API Documentation](https://documenter.getpostman.com/view/11445518/2s9YXfa2zb)

## Features

- Auth (Sign in/Sign up)
- Create Post ( Anonymously  or as User)
- Get all Posts
- Delete Post
- Forgot Password
- Reset Password
- Update Current user password
- Get Current user
- Delete current user

## Start the app locally 🔌
First please clone this repository 
```bash
git clone https://github.com/Aakash-Rana/Atlys-Backend.git
```

## Environment setup

First update .env file to server folder
Update these variables down below to .env file and set them as you want.
```
DATABASE_PASSWORD = xxxx
EMAIL_USERNAME = xxxx
EMAIL_PASSWORD = xxxx
```

## SMTP ( EMAIL Service )

To setup email functionality which we are using for forgot and resetting password.
I have used Mailtrap.io , you can use any Email Delivery platform.
After setting up you will get below details that you need to update in config.env
```
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=25
```


## Database 📥

If you don't have mongoDB installed on your local machine then create a MongoDB Atlas cluster and add the link to your .env file.
Also update ```server.js``` file code

in server.js , update DATABASE_LOCAL to DATABASE
```
const  DB  = process.env.DATABASE_LOCAL.replace(
'<PASSWORD>',
process.env.DATABASE_PASSWORD
);
```
in config.env
```
DATABASE = ??? if you don't have mongodb installed.
```

## Server 🔧

Go server folder and install the requirements and start the server. 

```bash
npm install
npm start (for production)
npm run start:dev ( for development)
```

### Done 🥳

App is ready to go. Check the localhost with the port ( default=3000 ) that you set for PORT in .env file. 
http://localhost:3000
