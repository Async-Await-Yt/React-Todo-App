import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { updateTodos, deleteTodos } from '@redux'
import './tile.scss'

const Tile = ({ todo }) => {
  
  //dispatch update and delete
  const dispatch = useDispatch()

  const updateTodo = () => {
    dispatch(updateTodos(todo.id))
  }
  const deleteTodo = () => {
  dispatch(deleteTodos(todo.id))
  }
  
  return (
    <div id='tile'>
      <input type="checkbox" defaultChecked={todo.checked} onChange={updateTodo} />
      <span>{todo.title.length > 24 ? todo.title.substring(0,24) : todo.title}</span>
      {
        //delete icon 
        todo.checked ? <MdOutlineDelete id='icon' onClick={deleteTodo} /> : null
      }
    </div>
  )
}

export default Tile