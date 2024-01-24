import React, { useState } from 'react'
import CreateTodo from './CreateTodo'

export default function TodoList() {
    const [todos,setTodo]=useState([]);
  return (
    <div className="home">
    <h2>Todo List</h2>
    <CreateTodo/>
    {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo =>{
            <div>
                {todo}
            </div>
        })
    }
    </div>
    
  )
}
