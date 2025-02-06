import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {  
  
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodods(newTodo){
    setTodos([...todos,newTodo])
    persistData([...todos,newTodo])
  }

  function deleteTodo(index){
    const newTodos = todos.filter((todo,todoIndex)=>todoIndex!==index)
    setTodos(newTodos) 
    persistData([...todos,newTodo])

  }

  function editTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    deleteTodo(index)
  }

  //when page refresh all our todo gayab to we use this so that we can bacha ske usse
  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')

    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodods={handleAddTodods}/>
      
      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos}/>
    </>
  )
}

export default App
