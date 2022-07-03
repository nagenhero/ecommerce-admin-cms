# Admin E-commerce CMS api server
This is a projectt build for the backend server api build to create and manage thier ecommerce store.

This is the only api server part part. The client is available at rep '....'

# How to use
1. run `git clone <put your git url here>`
2. run `npm i`
3. run `cd <folder name>`
4. run  `npm run dev` for the local devlopment.Note that you must have nodemon install in your system, if not   `npm i niodemon -g`

## apis
all our api url follws the following patterns:`{rootUrl}/api/v1`

### Admin Registration and login api
This section shows you how can you access the api admin registration and login.
Note: TODO: make sure the admin registration api is protected after first admin is create because only admin can add another admin user.
All registration ad login api follow the following patterns `{rootUrl}/api/v1/register-login`

| # | PATH | METHOD | IS PRIVATED | DESCRIPTION |
| --| -----|--------| ------------|-------------|
| 1.| `\`  | POST   | YES         |send user data fName,lName... to create new adimin user in the database |
