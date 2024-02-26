import './App.css';
import { useEffect, useState } from 'react';
import { TodosInput } from './Components/TodosInput';
import { postTodo, getTodos, Todo } from "./Components/action1.js";
import { TodoList } from './Components/TodosList.js';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (value: string) => {
    postTodo({
      value: value,
      isCompleted: false
    }).then(data => {

      setTodos([...todos, data])
    });
  }

  useEffect(() => {
    getTodos().then((d) => setTodos(d));
  }, [])
  return (
    <div>
      <br />
      <h1>Todos App</h1>

      <br />
      <TodosInput handleAdd={handleAdd} />
      <TodoList data={todos} />
    </div>
  )
}

export default App
