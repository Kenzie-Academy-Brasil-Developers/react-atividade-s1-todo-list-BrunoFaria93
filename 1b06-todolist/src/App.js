import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {
  const[lista, setLista] = useState([])

  function addTodo(newTodo){
    setLista([...lista, newTodo])
  }
  function handleTodo(itemRemover){
    const newList = lista.filter((item) => {return item !== itemRemover})
    setLista(newList)
  }
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList lista={lista} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
