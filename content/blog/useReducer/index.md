---
title: useReducer ?
date: "2021-01-04T22:11:20.284Z"
description: "useReducer"
---

Two Hooks that are used for modern state management in React: useState and useReducer

> Reducer in React
> The following function is a reducer function for managing state for a list of items:

```
const todoReducer = (state, action) =>{
    switch (action.type){
        case 'DO_TODO':
        return { ...todo, complete:true};
    } else {
        return todo;
    }
});
case 'UNDO_TODO':
return { ...todo, complete:false};
} else {
    return todo;
}
});
default:
return state;

```

> Fields
> A field has a name and type:

```
age: Int
```

The built in scaler types are:
Int, Float, String, Boolean, ID

> Non-nullable fields are denoted by exclamation mark:

```
age: Int!
```

Lists are denoted by square brackets:

```
names: [String!]
```

> Enum
> Enum is a scalar value that has a specified set of possible values:

```
enum Category {
    PROGRAMMING_LANGUAGES
    API_DESIGN
}
```

> Interface
> Interface is a list of fields.
> Type must have the same fields all the interface it implements and all interface fields must be of same type.

> Schema directive
> A directive allows you to attach arbitary information to any other schema definition element

```
name: String! @defaultValue(value:"blogpost")
```

Each GRAPHQL implementation can define their own custom directives that add new functionality.

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
