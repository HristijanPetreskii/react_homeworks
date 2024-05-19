import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Item from './Item'


function App() {
 const [data,setData]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ5MDA4NGIxOWZlYjYwNjFiOGQyODQwOTYzOGQyOSIsInN1YiI6IjY2NDc5ZWUzMGQ2Y2Q2ZjUwZjJmMzkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a_sZx7lI9glrvOnpCVWG-ni-bqYDesW6DIxgh9fb7Uk'
    },
  }
  useEffect(() => {
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
   options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}, [])
  return (
    <>
    {data.results.map((movie) => (
       <div key={movie.id}>
        <h2>{movie.title}</h2>
       </div>
    ))}
    </>
  )
}

export default App
