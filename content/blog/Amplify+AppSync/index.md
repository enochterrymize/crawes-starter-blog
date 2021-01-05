---
title: AmplifyAppSync
date: "2021-04-04T22:09:03.284Z"
description: "AmplifyAppSync"
---

In this tutorial we will be learning about AppSync - Graphql service and i realise that Amplify and Appsync integrates so well.

> Introduction to Amplify and AppSync
> Amplify framework is opensource
> Best practise built-in
> Infrastrcture as code

Amplify Categories
API, STORAGE, NOTIFICATION, AUTH, XR, ANALYTICS
that includes library and clo integrates wilth AWS SERVICES

```
amplify init
amplify add api
amplify mock
amplify push
amplify update api
```

Amplify library api

```
//import amplify components
import { API } from 'aws-amplify'

//call Amazon API Gateway endpoint
const data = await API.get('orderApi', '/orders')
```

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
