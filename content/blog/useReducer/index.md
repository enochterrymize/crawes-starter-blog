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
