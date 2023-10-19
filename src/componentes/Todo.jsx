import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo}) => {
  return (

    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>

      <div className="todo-buttons">
        <button className="buttonadd" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="buttonremov" onClick={() => removeTodo(todo.id)}>X</button>
      </div>


    </div>
  );
};

export default Todo;