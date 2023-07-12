import React from 'react'
import { useState } from 'react'

const Home = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("data")))
console.log(todos)
    const handleTitle = (e)=>{
        setTitle(e.target.value)

    } 
      const handleDesc = (e)=>{
        setDescription(e.target.value)

    }  
      const saveButton = ()=>{
        const newtodo =
         {
            id: Math.floor(Math.random() *Date.now()),
            title:title,
            description:description
         }

         setTodos([...todos,newtodo])
         localStorage.setItem('data',JSON.stringify(todos))
    }
   
    


    return (
        <> 
        <div className="container" style={{ backgroundColor: 'green', padding: '100px' }}>
        <div className="mb-3">
  <label for="title" className="form-label">title</label>
  <input type="text" onChange={handleTitle} className="form-control" id="formGroupExampleInput" placeholder="title"/>
</div>
<div className="mb-3">
  <label for="description" className="form-label">description</label>
  <input type="text" onChange={handleDesc} className="form-control" id="description" placeholder="description"/>
</div>
<div className="mb-3">

  <input type="button" onClick={saveButton} className="btn btn-primary w-100" id="description" value="add"/>
</div>
        </div>
{
    todos.map(todo=>{
        return(
<>
<h3>{todos.title}</h3>
<p>{todos.description}</p>
</>
        )
    })
}


</>
    )
}

export default Home