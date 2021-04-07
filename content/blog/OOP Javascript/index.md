---
title: Object oriented Programming in Javascript
date: "2020-05-01T22:12:03.284Z"
description: "OOP"
---

### OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

Object in JS is same as Object in real life.

```
const names = ['shaun', 'crystal']

const ages - new Array(20,30,40)

const userOne = {}
const userTwo = new Object();


```

Object Literal JS
Best Approach

```
const userOne = {
    username: 'terry',
    email: 'terry@terry.com',
    login(){
        console.log('the user logged in');
    },
    logout?(){
        console.log('the user logged out');
    }

};

console.log(userOne.email)
userOne.login();
```

## Classes

its same like prototype modeling

A class is a blueprint.

```
{
    username,
    email,
    login(),
    logout(),
}
```

#Class Constructor

```
class User {
    constructor(username,email){
    this.username = username;
    this.email = email;
    }
}

const userOne = new User('terry', 'terry@terry.com);
```

### Class Mathods

```
class User {
    constructor(username,email){
    this.username = username;
    this.email = email;
    this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score +=1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('terry', 'terry@terry.com);

console.log(userOne, userTwo);
userOne.login().inscore().logout();
```

### Class Inheritance

```
class Admin extends User {
deleteUser(user){
users = users.filter((u) => {
return u.username !== user.username;
})
}
}
```

const userThree = new Admin('Muller','muller@muller.com');

### Super

```
class Admin extends User {
    constructor(username, email,title){
        super(username,email);
        this.title= title;
    }
deleteUser(user){
users = users.filter((u) => {
return u.username !== user.username;
})
}
}
```

### Constructors under the hood

Whats going on background.

Constructor Function

## Prototype Model

If we create any object in Javascript.

**proto** = Property

Prototypes

- Every object in Javascript has a prototype.

- Prototypes contain all the methods for that object type.
