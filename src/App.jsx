import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css';
import Todo from'./componentes/Todo';
import TodoFrom from './componentes/TodoFrom';
import Busca from './componentes/Busca';
import Filtro from './componentes/Filtro';





function App() {
  const [todos, setTodos] = useState([
    


  ])

const [busca, setBusca] = useState("");

const [filtro, setFiltro] = useState("All")

const [sort, setSort] = useState("Asc")

  const addTodo = (text,category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];

   setTodos(newTodos);
  };

    const removeTodo = (id) => {
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo: null
        );
      setTodos(filteredTodos);

    };


    const completeTodo = (id) => {
      const newTodos = [...todos]
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
      setTodos(newTodos);

    };
    


  return (
    <>
      <div className="app">
        <h1>Lista de tarefas</h1>
        <Busca busca={busca} setBusca={setBusca}/>
        <Filtro filtro={filtro} setFiltro={setFiltro} setSort={setSort} />

        <div className="todo-list">
          {todos
          .filter((todo) => filtro === "All" 
          ? true : filtro === "Completed" ? todo.isCompleted : !todo.isCompleted
           )
          .filter((todo) =>
           todo.text.toLowerCase().includes(busca.toLowerCase())
          )

          .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text)
           : b.text.localeCompare(a.text))
          .map((todo) => (
         <Todo key={todo.id}
          todo={todo}
           removeTodo={removeTodo} 
           completeTodo={completeTodo}/>
          ))}
          
        </div>
        <TodoFrom addTodo={addTodo}  />
      </div>
    </>
  )
}

export default App;
