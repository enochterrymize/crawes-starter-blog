---
title: Serverless App ?
date: "2021-01-04T22:09:03.284Z"
description: "Serverless App"
---

In this tutorial we will be creating a GRAPHQL API that interacts with DYNAMODB NoSQL Database to perform CRUD(Create, Read, Update, Delete and list) Operations.

> Introduction to Graphql
> GRAPHQL is an API Implementation

> What is Graphql
> It is a query language for API's and a runtime for fullfilling those queries with your data.

![Serverless App](./serverless.png)

> Here is an example of GraphQL Schema:
> Schema consist of base types(data models) and GraphQL operations like query fetching data, mutuation for creating and deleting data; and subscription for changes in real time

```
# base type
type todo{
    id:ID
    name: String
    completed:Boolean
}
# Query definitions
type Query {
    getTodo(id:ID): Todo
    listTodos: [Todo]
}
# Mutation definitions
type Mutation {
    createTodo(input: Todo): Todo
}

# Subscription definitions
type Subscriptions{
    onCreateTodo: Todo
}
```

# GraphQL Operations

GraphQL Operaions are how you interact with the API data sources. GraphQL operations can be similarly mapped to HTTP methods for RESTFul APIs
GET -> QUERY
PUT -> MUTATIONS
POST -> MUTATIONS
DELETE -> MUTATIONS
PATCH -> MUTATIONS

> AWS APP SYNC
> App Sync is a managed servie that allows us to deploy a GRAPHQL API, resolvers and data sources quickly and easily using the Amplify cli.

# Creating a GRAPHQL API

~ npx create-react-app notesapp
~ cd notesapp
~ npm install aws-amplify antd uuid

~ amplify init
~ amplify add api

Next, Open the base GRAPHQL Schema genereated by cli.
update the schema to the following and save it 