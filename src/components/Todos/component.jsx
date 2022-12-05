import React from "react";

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

const TodosComponent = ({ enterTodo, isTodosEmpty, onEnterTodo, onAddTodo }) => (
  <div className="todos">
    <h1 className="title">Todos</h1>
    
    <EnterTodo
      value={enterTodo}
      onChange={onEnterTodo}
      onClick={onAddTodo}
    />
    {isTodosEmpty ? <EmptyList/>: <List /> }
  </div>
)

export default TodosComponent;
