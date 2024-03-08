import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskStatus = () => {
    const [data, setData]=useState([{}]);

        useEffect(()=>{
          const fetchdata =async()=>{
            try {
              const result=await fetch("http://localhost:80/task/status");
              const fetchdata=await result.json();
              setData(fetchdata);
             
              console.log(data)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
          fetchdata()
        },[])
         
        const handlecomplete=async(taskid)=>{
         const response=await axios.post('http://localhost:80/history/history', {taskid: taskid})
         console.log(response.data)
        }
       
    

  return (
    <div className='bg-slate-400 p-5 h-4/5 w-screen grid grid-rows-4 grid-flow-col gap-4'>
        
        {data.map((task, index)=>(
    <div key={index} className='w-52 h-8/10 bg-lime-800 p-1 pl-2 mt-5'>
<h1 className='text-black font-sans text-lg'>Title: {task.title}</h1>
<p className='text-black font-sans text-xs'>Deadline: {task.date}</p>
<p className='text-black font-sans text-xs'>Description: {task.description}</p>
<p className='text-black font-sans text-xs'>Status: {task.status}</p>

    </div>
        ) )}
       
    </div>
  )
}

export default TaskStatus