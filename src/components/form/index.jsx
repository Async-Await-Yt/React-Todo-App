import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '@redux'
import './form.scss'

const Form = () => {

  //dispatch add event
  const dispatch = useDispatch()
  // handle input state
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    //you can return a error toast
    if (!input.trim()) return 
    
    dispatch(addTodos(input))
    setInput("")
  }

  return (
    <form id='form' onSubmit={(event)=>addTodo(event)}>
      <input type="text"
        placeholder='Add Todo'
        value={input}
        onChange={(event) => setInput(event.target.value)} />
    </form>
  )
}

export default Form