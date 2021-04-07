---
title: Debugging in PHP
date: "2020-05-01T22:12:03.284Z"
description: "PHP"
---

### OBJECT ORIENTED PROGRAMMING IN PHP

### PHP 7

"bug" = software errors

"debugging" = removing the software errors are called debugging.

Removing bugs is a very critical thing before releasing the software.

Error types : There are different types of error that will encounter. some are easier to debug, some will never produce an error message.

syntax error:

Logical error: is an error in your algorithm.

Runtime Exceptions:
backtrace : search the backtrace to find what happened last in out own code.

Catching Exception: An uncaught exception will lead to a program abort, Exceptions can be caught and handled in most cases.

This is especially useful if the system you are using is not under your control.

Kepp in mind that PHP comes historically from a procedural approach,

Fatal Error: its means that some error happened which PHP thinks cannot be handled and no exceptionis thrown.

its better to catch them as exceptions on a very global level and log them with backtrace.

"Every uncaught exceptions will results in a fatal error"

There are four different error types,. Syntax errors could be prevented with a goog IDE. Logical errors will not give an error message but rather wrong ot unexpected results. Fatal errors will just stop your program. Try to catch exceptions and prevent other fatal errors from happening by programming careffully.

Prevent bugs form happening

Tips is to "Defensive Programming" This means that you should try to think about every possible situation that might happen in your application and try to make your software react in a correct way.

Do not write to complex methods or classes. Organise and structure them, if you can reduce complexity by seperating code into different methods or classes. you will reduce the number of errors.

Another way to reduce errors is to test. as often as possible, The most used for PHP is PHPUnit.

writing comments will help you to understand the code and reduce debugging time. Understandind the code is one of the very important part of debugging.

Debugging methods :

Error Logging : it will help you to fing errors,especally fatal errors. turn on PHP error logging.

Pro: Only way to find fatal errors.
cons: Limited information.

Register Shutdown Function
This function will be run at the end of script. it will run even if some error occured or you script was terminated by calling exit().

Pr: Helps to prevent showin nothing to the visitor.
con: Limited information available. Needs to be caled for every visit.

Echo and Co.

Easiest way to debug PHP Code is to add output statement at certain points in the code. There are basically three methods, you can use: echo, var_dump, print\_\_r are able to show the content of arrays or objects.

Pros: Fatest way to get some insight into whats happening.

Cons: Security problems as you ca show secret information,.

Logging to a file: you can also write them to a file, You can leave log statement in your code. If you can access the file system this is to be preferred over output to the browser.
Pros: Allows logging and debuggind without breaking design or functionality.
Cons: Require file system access. Logging complex objects might lead to very large log files.

Logging with FIREPHP

firephp is an extension for the popular Firefox extension Firebug. It requires to include a PHP library into you code.

Logging to slack.

You can log special events or errors to a slack channel and have a group of fdevelops ready to look and fix things.

Debugging with XDebug

Xdebug is an extension to PHP. that allows very complex debugginf techniques in cooperation with mordern IDEs. You can use Conditional breakpoints, stacks, and function traces. Profiling memory usage and escution time.

Error logging:
