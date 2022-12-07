// import Image from 'next/image'
import React from 'react'
// import styles from '../styles/Community.module.css'
import { useEffect,useState } from 'react'
import axios from "axios"


const Play = () => {

    const [carz, setCarz] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true)
        const options = {
            method: 'GET',
            url: '/api/posts/',
          }

        axios.request(options)
        .then(response => {
            console.log(response)
            setCarz([...response.data.posts])
            // console.log(response.data)
            setLoading(false)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    console.log(carz)


  return (
    <div>
        {carz
        .map(
                (filteredCar) => {
                return (
                
                <div /*target="_blank" rel="noreferrer"*/  key={filteredCar._id} >
                    <div className="car-title">{filteredCar.content}</div>
                </div>
                )
                    })
        }
        
    </div>
  )
}

export default Play