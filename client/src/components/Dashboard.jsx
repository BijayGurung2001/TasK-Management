import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const[data,setData]=useState([{}])
 

useEffect(()=>{
  const fetchdata=async ()=>{
    try {
      const result = await fetch('http://localhost:80/user')
      const fetchdata= await result.json();
      setData(fetchdata)
      console.log(fetchdata)
    } catch (error) {
      console.log("error occured in fetching dashboard data")
    }
  }
  fetchdata()
  
},[])
  return (
    <div>
        <h2 className='text-5xl m-10 '>User Info</h2>
       {data.map((d, i)=>(

        <ul key={i}>
        <li className='text-5xl'>Name: {d.name}</li>
        <li className='text-5xl'>Email: {d.email}</li>
        <li className='text-5xl'>Address: {d.address}</li>
        
      </ul>
       ))}
          
      
      
    </div>
  )
}

export default Dashboard