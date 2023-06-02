import React, {useState, useRef, useEffect} from 'react'
import TodoList from './TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function uniqueIds(){
    return Math.random(10000)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e){
      const name = todoNameRef.current.value
      if(name === '') return
      setTodos(prevTodos =>{
        return [...prevTodos, {id: uniqueIds(), name: name, complete: false}]
      })
      console.log(name)
    }

    return (
      <>
        <TodoList todos={todos}/>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add</button>
        <button>Clear</button>
        <div>0 left to do</div>
      </>
    )
  
}

export default App;
