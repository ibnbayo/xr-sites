// import Image from 'next/image'
import React from 'react'
// import styles from '../styles/Community.module.css'
import { useEffect,useState } from 'react'
import axios from "axios"


const Playpost = () => {


    const handleSubmit = async (event) => {
    event.preventDefault()
    // get the values of the form fields
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value
    }



    const [carz, setCarz] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const axios = require("axios");

const options = {
  method: 'POST',
  url: '/api/posts',
  headers: {
    'content-type': 'application/json',
    
  },
  data: '{"url":"tocarsit"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    },[])


    console.log(carz)


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Content:
        <textarea name="content"></textarea>
      </label>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default Playpost