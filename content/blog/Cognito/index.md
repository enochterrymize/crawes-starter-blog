---
title: Authentication
date: "2021-04-04T22:09:03.284Z"
description: "AWS Cognito"
---

In this tutorial we will be learning about Authentication

> Authentication = Proving your identity
> Authorization = limited access

Authentication and identity are integral part of any application, knowing who the user is, what permission they have,and returning the proper data to the signed user.

### OAUTH

### MFA

### TOTP

Fully managed authentication services like Auth0, Okto, AWS Cognito

### How Amazon Cognito works

Cognito has user pools and identity pools

Amplify Categories
API, STORAGE, NOTIFICATION, AUTH, XR, ANALYTICS
that includes library and clo integrates wilth AWS SERVICES

User pool provides a secure user directory that stores all your users

To manage all aspects of user Identity

- Signing up a user
- Signing in a user
- Signing out a user
- Changing User Password
- Resetting User Password
- Conforming a MFA Code

#### Amazon Cognito Integration with AWS Amplify

you can create and configure Amazon Cognito services directly from the Amplify CLI. once you created the auth service via CLI you can call various method from your application using Amplify Javascript Library

> Routing, Authentication, Protected Routes
> ANT Deisgn to give the application some basic styling

### Creating the React App and Adding Amplify

1. Create the React Application
2. Install the necesary dependencies
3. Create the Amplify porject

To begin, open your terminal and create a new react APP
~ npx

> AUTHENTICATION

```
// import React Component
import {withAuthenticator} from 'aws-amplify-react'

// main App component definition
class App extends React.Component{

}
```

> Why AMPLIFY + APPSYNC

![Serverless App](./serverless.png)

> Graphql TRANSFORM
> It creates the backend for you, It connects and creates databse

```
type Post
@model {
    id: ID!
    content: String
    description: String
    ups:Int
    downs:Int
}

```

we have a post model and when you update the amplify it will create the appsync and create queries and mutation

```
type Post
@model
@auth(rules: [{allow: owner}])
{
    id: ID!
    content: String
    description: String
    ups:Int
    downs:Int
}

```

a directive called @auth, we can set rules that it allows only allows the owner, that will hook with coginito to check the user as owner.

@searchable
a direvtive elastic search

# Getting started with Amplify

```
npx create-react-app image-library-appsync
cd
npm start
amplify init

npm install aws-amplify @aws-amplify/ui-react
code.
// In app.js, add the import of aws configure and amplify

```

> COGNITO
> Adding security in your application.
> Authentication to our application,

# Creating a GRAPHQL API

~ npx create-react-app notesapp
~ cd notesapp
~ npm install aws-amplify antd uuid

~ amplify init
~ amplify add api

Next, Open the base GRAPHQL Schema genereated by cli.
update the schema to the following and save it

# Amazon Cognito

It handles authentication and identity

Identity management scenarios
Business to Consumer, Business to Business, Business to Employee, IOT Scenarios

Cognito User Pools
. Managed user directory
. Provides profiles to manage users
. Sign-up and Sign-in user flows
. Provides OpenID Connect and OAuth2.0 standard tokens
. Priced per monthly active user
