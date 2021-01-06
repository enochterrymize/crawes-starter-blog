---
title: ASYNC Javascript ?
date: "2021-01-04T22:11:27.284Z"
description: "Asynchronous Javascript"
---

OK then so now you're quite familiar with a lot of the javascript language hopefully.

I think it's time to introduce the beast that is asynchronous javascript.

When I first started to learn about asynchronous javascript I felt like I was climbing a mountain with no peak.

And I kept on slipping up along the way as well.

> Asynchronous Javascript
> asynchronous javascript is one of the most important parts of the language because it governs how we perform tasks that take some time to do like requesting data from a database or from an API.

And chances are if you're making a real javascript application then you will be using asynchronous code at some point to do these kinds of things.

So in a very simplistic nutshell

> Asynchronous code is code that can start now and then finish later

but before we talk more about asynchronous code let's first of all understand its counterpart synchronous code.

So javascript by its very nature is a synchronous language and that basically means that JavaScript can execute only one statement at a time from top to bottom.

So for example in a javascript file we could have three statements and each statement is run in turn.

```
console.log("one")

```

Now line 2 cannot stop before line 1 is finished and Line 3 cannot start before line 2 is finished so it executes these one at a time in order.

Now you might hear javascript being called a single threaded language and that essentially means the same thing a thread is like an audit sequence of statements and only one of those statements can run at a time.

So this is the crux of synchronous code one statement being executed at a time after one another.

Now with this image of synchronous code in mind a single thread and only one statement executed in at a time.

Imagine this scenario we want to call a bunch of JavaScript functions in a file.

Some of these functions do quick little things like log something to a console but one of them wants

to make a network request to a database on another server somewhere to get some data.

Now this could take 2 or 3 seconds to complete maybe less maybe more so in a synchronous programming

world because only one statement can run at a time.

This fetching of data stalls the program.

This is known as blocking code because it blocks the next line of code from running until it gets the

data back.

And this function is complete.

After those two or three seconds.

Now in this case you might think well okay.

Two seconds isn't that long to wait.

But what if you have multiple functions to get data then that could soon be five to six seconds off

six to seven seconds and it would block the rest of the code underneath from running until these things

are complete.

So this is a downfall of synchronous code.

And this is where asynchronous code comes into play to help us out so we know that running our functions

synchronicity when it comes to task that takes some time to complete is probably then not the best way to work right.

So remember the definition I first gave you of asynchronous code 
// to start something now and finish it later.

This is the pattern we generally want to follow when boring tasks that take some time to do like network

requests for data to a database or an API.

So imagine we have the same kind of sequence of function calls or statements.

Only this time instead of this being some kind of synchronous function to request data we use an asynchronous

function instead.

And this means the function can start now and then finish later once the data has come back from wherever

we get it from.

Now since this function is finishing later what we typically do is pass this function or this statement

some kind of callback function as a parameter and then that callback function is the thing that runs

and finishes later on.

Once the request is complete and the data comes back.

So how is this all work exactly.

Well we have our queue of function calls in the code again which executed one at a time so first this

one then this one and so forth.

Now remember at all times JavaScript can only execute one thing at a time but this time when we get

to the request function here we are using an asynchronous function to request the external data.

What this means is that the browser takes that request and it handles it outside of the scope of this

single thread in another part of the browser.

It also takes a callback function and puts it to one side too so that it knows to execute this later

on when the data comes back.

So because this network request has been taken out of this Fred he is now running in a different part

with the browser JavaScript can carry on down the queue and run the remaining functions all the while

this is still going on.

The request for data so it continues through these functions and then when it receives the data back

from the network request and wants the rest of the functions have been executed then we're allowed to

call this callback function and finish this original function.

So this is the crux of asynchronous programming starting something now which can be finished later.

And it makes our code not blocking because the rest of the functions here they can run while the request

is being made.

Now this explanation is a very simplistic one.

And there are other things at play such as the event loop and the call stack which we have not discussed.

But I think to delve into that right now would be a bit overwhelming.

And I think this picture of painted should be enough for now to understand the general idea of asynchronous

code.

So now we know a little about what that is and what asynchronous code does.

Let's have a look at an example.

> Reducer in React
> The following function is a reducer function for managing state for a list of items:

```
const todoReducer = (state, action) =>{

}
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
