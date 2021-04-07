---
title: Building PHP Framework
date: "2020-05-01T22:12:03.284Z"
description: "Building PHP Framework"
---

Building a PHP Framework

I assume you have installed php 7.1

Install Composer

Its Dev Ready Framework

We look into the Architecture, Framewrok is open, so we can plugin some new stuffs. We focus on PSR(pHP Standard Recommendation) -Code base looks the same. PSR4- Autoloading, PSR8- Message, PSR7 focus on workflow, PSR11 Container workflow.

In pHP WORLD psr is refered to composer

Dependency Injection : Beneifits of using, we dont new object, we just inject them,

```
<?php
class User{
public function getUsers(){

}
}
class UserController{
    private $user;
    public function __construct(User $user){
        $this->user = $user;
    }
    public function index(){
        $user = $this->user;
        return $user->getUser();
    }
}
// Database Connection

class Database {
    public function connect(){

    }
}
class UserController{
    private $database;

    public function __construct(Database $database){
        $this->database = $database;
    }
    public function index(){
        $database = $this->database;
        return $database->connect();
    }
}


```

What if I want to switcvh off my databse implement ConenectsToDatabase

Link interfaces to classes.

we are not coupling it here,

**DIR** . '../vendor/autoload.php

Understanding Dependency Injection

Using dependency Injection: This is the pattern of Inversion of Control. The control of the dependencies in inverted form one being called to the one calling.

The main advantage: the one at the top of the caller chain is always you, You can control all dependencies ans have complete control over how your application works.

# Using a Container

PHP-DI works

The continer takes away all the works of creating and injecting dependencies.

```

use DI\ContainerBuilder;

require_once __DIR__ . '/../vendor/autoload.php';

$containerBuilder = new ContainerBuilder();

$container = $containerBuilder->build();

echo 'hello';

```

request and response from our framework
