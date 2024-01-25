import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from 'axios';

export default function TodoList() {
    const [todos,setTodo]=useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result=>setTodo(result.data))
      .catch(err=>console.log(err))
    })
  return (
    <div className="home">
    <h2>Todo List</h2>
    <CreateTodo/>
    {
        todos.length === 0 
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo =>(
            <div onClick={handleEdit}>
              <BsCircleFill className="icon"/>
                {todo.task}
            </div>
        ))
    }
    </div>
    
  )
}
