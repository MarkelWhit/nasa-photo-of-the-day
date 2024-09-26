import React, { useEffect, useState } from "react";
import "./App.css";
import Plans from './Plans'
import axios from 'axios'
import { BASE_URL, API_KEY } from './index.js'



function App() {
 const [image, setImage] = useState()
 //const [events, setEvents] = useSta()
 //const [] = useState(null)

 useEffect(() => {
axios.get(`${BASE_URL}/planetary/${API_KEY}`)
  .then(res => {
    console.log(res.data);
    setImage(res.data.hdurl)
  })
  .catch(err => {
    console.log(err)
  })
}, [])



return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div id='image'>
        
        <img src= {image}/> 
      </div> 
      <Plans />
    </div>
  );
}

export default App;
