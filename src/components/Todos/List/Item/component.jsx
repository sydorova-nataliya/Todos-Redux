import React from "react";

import { connect } from 'react-redux';
import {removeTodo, checkTodo } from "../../../../store/todos/actions";

import './styles.scss';

const Item = ({ id,title, completed, removeTodo, checkTodo }) => (
  <li  className = {completed ? 'item checkClass' : 'item' }  >
    <div className="value">
      <input
        className='checked'
        type="checkbox"
        onClick={() => checkTodo(id)}
      />
      
     {title}
    </div>
    <button onClick={() => removeTodo(id)}>
      x
    </button>
  </li>
)

const mapDispatchToProps={
  removeTodo,
  checkTodo
}
export default connect(null, mapDispatchToProps)(Item);


