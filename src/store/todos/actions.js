import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./types";

export const addTodo = (payload) =>({
    type:ADD_TODO,
    payload
});
export const removeTodo = (payload) =>({
    type:REMOVE_TODO,
    payload
});
export const checkTodo = (payload) =>({
    type:CHECK_TODO,
    payload
});