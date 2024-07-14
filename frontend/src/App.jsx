import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jokes ,setJokes]=useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  
  })

  return (
    <>
     <h2>A Full Stack App  </h2>
     <p>JOKES : {jokes.length}</p>
     {//map the jokes that are coming from backend and display on the frontend 
     }

     {
        // eslint-disable-next-line no-unused-vars
        jokes.map((joke,index)=>(
            <div key={joke.id}>
                <h1>{joke.title}</h1>
                <p>{joke.content}</p>
            </div>
        ))
     }

    </>
  )
}

export default App
