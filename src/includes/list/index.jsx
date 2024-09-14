import React from 'react'
import { useSelector } from 'react-redux'
import { todos } from '@redux'
import components from "@components"
import './list.scss'

const {Tile} = components

const List = () => {

  // we have todos value []
  const todo = useSelector(todos)

  return (
    <section id='list'>
      {
        // check if any todo exists
        todo.length ?
          //we forgot to pass key -> major bug
          todo.map((todo) => <Tile key={todo.id} todo={todo} />)
          :
          <center>Create Todos</center>
      }
    </section>
  )
}

export default List