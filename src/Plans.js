import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {BASE_URL, API_KEY} from './index'

export default function Plans(){
const [title, setTitle] = useState('title')
const [expl, setExpl] = useState();

useEffect(() => {
    axios.get(`${BASE_URL}/planetary/${API_KEY}`)
    .then(res =>{
        console.log(res)
        setTitle(res.data.title)
        setExpl(res.data.explanation)
    })
    .catch(err =>{
        console.log(err)
    })
})
return(
    <>
    <h1>{title}</h1>
    <p>{expl}</p>
    </>
)
}