import React, { useEffect, useState } from "react";
import "./App.css";

import axios from 'axios'
import { BASE_URL, API_KEY } from './index.js'



function App() {
 const [image, setImage] = useState()
 const [events, setEvents] = useEffect([])
 //const [] = useState(null)

 useEffect(() => {
axios.get(`${BASE_URL}/planetary/${API_KEY}`)
  .then(res => {
    console.log(res)
    setEvents(res.data)
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
        <img src=''/> 
      </div> 

      
    </div>
  );
}

export default App;
