import React from 'react'
import components from '@components'
import includes from '@includes'

const {Title, Form} = components
const {List } = includes

const Home = () => {
  return (
    <main id='home'>
      <Title title='To Do App' />
      <Form />
      <List />
    </main>
  )
}

export default Home