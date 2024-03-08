import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TaskHistory = () => {
const [data, setData]=useState({})
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const result =await axios.get("http://localhost/history");
                        setData(result.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
            
        }
        fetchdata()
    },[])
  return (
    <div className='grid-cols-3 '>
       {data.map((e)=>{
        return(
            <div key={e.id}>
            <h1>Titile: {e.Title}</h1>
            <p>Date: {e.Date}</p>
            <p>Description: {e.Description}</p>
            <p>Status: {e.Status}</p>
        </div>
        )
       })}
        
        
    </div>
  )
}

export default TaskHistory