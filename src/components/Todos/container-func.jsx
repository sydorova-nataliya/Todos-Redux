import React , {useState } from 'react';
import TodosComponent from "./component";

import { connect } from 'react-redux';
import { selectTodos } from '../../store/todos/selector';
import { addTodo } from '../../store/todos/actions';

import './styles.scss';

const Todos =({todos, addTodo})=>{
  const [enterTodo, setEnterTodo] = useState('');

  const handleEnterTodo = e => setEnterTodo(e.target.value);
  
  const handleAddTodo = () => {
    if(enterTodo!==''){
      const newTodo = {
        id: Math.round(Math.random() * 100),
        title: enterTodo,
        completed: false,
      }

      setEnterTodo('');
      addTodo(newTodo);
    }
  }
  const isTodosEmpty = todos.length === 0;

  return (
    <TodosComponent
      enterTodo={enterTodo}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
    />
  )
}
const mapStateToProps=(state)=>({
  todos: selectTodos(state),
})
const mapDispatchToProps={
  addTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
