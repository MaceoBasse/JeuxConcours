# Backend auth node js mongodb

## Introduction

This is a backend template for Role based authentication which is created by using nodejs, epxress, jwt and mongoDB.
It is perfect fit for creating a Customer management system using nodejs-backend or reactjs-frontend.

## Project File Structure

| File                       |            Details(contains)            |
| -------------------------- | :-------------------------------------: |
| congif.json                |      mongoDB Url, JWT private key       |
| helpers/db.js              |    contains the monogoDB connection     |
| helpers/errorHandler.js    |              global errors              |
| helpers/jwt.js             |    authenticates the token and role.    |
| helpers/role.js            |     contains the roles(Admin, User)     |
| services/user.services.js  | all methods that perform crud operation |
| routes/user.controllers.js |      routes to all crud operations      |

## Installation

    1. clone the repo
    2. npm install
    3. run the app-> npm start
    4. use the postman to test the app
