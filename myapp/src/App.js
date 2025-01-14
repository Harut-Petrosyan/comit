import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './Footer';

function App() {
  const [todos,setTodos] = useState([

    {
      id:Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id:Math.random(),
      text: "Learn React js",
      isCompleted: false
    },  
    {
      id:Math.random(),
      text: "Learn next js",
      isCompleted: false
    }
  ])

  return (
    <div className="App">
      <TodoForm onAdd={(text)=> {
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text: text,
            isCompleted:false
          }
        ])
      }}/>
      <TodoList todos={todos}
      onDelete={(todo)=>{
        setTodos(todos.filter((t) => t.id!==todo.id))
      }}
      onChange={(newTodo)=> {
        setTodos(todos.map((todo)=>{
          if (todo.id===newTodo.id) {
            return newTodo
          }
          return todo
        })
  )}}/>
      <TodoFooter todos={todos} onClearCompleted={() =>{
        setTodos(todos.filter((todo)=> !todo.isCompleted));
      }}/>
    </div>
  );
}

export default App;
