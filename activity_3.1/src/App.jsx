import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GoalHeader from './components/GoalHeader'
import GoalItem from './components/GoalItem'

function App() {
  const overArching = "My Goal For This Book"

  const headerOne = "Learn React for projects and products!"
  const headerTwo = "Practice what I learned!"
  const headerThree = "Motivate Continuous Learning!"

  const goalItemOne = `
    I want to ensure that I learn the most from this book! 
    I want to create fantastic products that add value to society!
  `
  const goalItemTwo = `
    Reading and learning is fun and helpful but I can only master a topic, 
    if I really work with it! That's why I want to do all the exercises throughout this book. 
    It will help me practice what I've learned!
  `
  const goalItemThree = `
    As a developer, learning never ends. 
    I want to ensure that I enjoy learning and that I'm motivated to dive into 
    advanced (React) resources after finishing this book.
  `

  return (
    <>
      <GoalHeader header={overArching} />

      <div className='content-border'>
      <GoalHeader header={headerOne} />
      <GoalItem text={goalItemOne} />

      <GoalHeader header={headerTwo} />
      <GoalItem text={goalItemTwo} />

      <GoalHeader header={headerThree} />
      <GoalItem text={goalItemThree} />
      </div>
    </>
  )
}

export default App
