import React, { useEffect, useState } from 'react'

const TaskHistory = () => {
const [data, setData]=useState({})
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const result =await fetch("http://localhost:80/historydata");
             const fetchdatat=await result.json();
             setData(fetchdatat)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
            }
        fetchdata()
    },[])
  return (
<div className='bg-slate-400 p-5 h-4/5 w-screen grid grid-rows-4 grid-flow-col gap-4'>
        
        {data.map((task, index)=>(
    <div key={index} className='w-52 h-8/10 bg-lime-800 p-1 pl-2 mt-5'>
<h1 className='text-black font-sans text-lg'>Title: {task.title}</h1>
<p className='text-black font-sans text-xs'>Deadline: {task.date}</p>
<p className='text-black font-sans text-xs'>Description: {task.description}</p>
<p className='text-black font-sans text-xs'>Status: {task.status}</p>
<button className='text-white bg-lime-600 rounded text-sm p-2 m-2 hover:bg-lime-950 hover:text-base ' 
onClick={()=>handlecomplete(task.id)}
>Complete</button>
    </div>
        ) )}
       
    </div>
  )
}

export default TaskHistory