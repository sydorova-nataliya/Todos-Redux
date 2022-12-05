import React from "react";

import Item from "./Item";

import { connect } from 'react-redux';
import { selectTodos } from "../../../store/todos/selector";
import './styles.scss';

const List = ({ todos }) => (
  <ul className="list">
    {todos.map(({ id, title, completed }) => (
      <Item
        key={id}
        id={id}
        title={title}
        completed={completed}
      />
    ))}
  </ul>
)
const mapStateToProps=(state)=>({
  todos: selectTodos(state),
})

export default connect(mapStateToProps, null)(List);
