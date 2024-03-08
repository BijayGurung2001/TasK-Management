import React, { useState } from 'react'
import axios from 'axios'
const Taskcreation = () => {
    const [taskData, setTaskData]=useState({
        title:"",
        deadline:"",
        description:"",
          })
  
    const handleinput=(e)=>{
        e.preventDefault();
        setTaskData({...taskData, [e.target.name]:e.target.value})
    }
    const handlesubmit=async()=>{
        try {
            await axios.post("http://localhost:80/taskinput/task", taskData)
            console.log({taskData})
     
        } catch (error) {
            console.log("error in sending data to backend", error)
        }
        
        
    }
  return (
    <div className='pt-10 pl-5'>
        <th className='text-3xl'>Insert new task</th>
        <tr>
            <td><input className='text-black mt-2' type='text' placeholder='Title' name='title'
                    onChange={handleinput}/></td><br/>
           </tr>
           <tr>
           <td><input className='text-black mt-2' type='date' placeholder='Deadline' name='deadline' onChange={handleinput}/></td>
        
           </tr>
        <tr>
            <td><textarea className='text-black mt-2' name='description' onChange={handleinput}>Enter Description here.....</textarea></td>
        </tr>
        <tr>
          
          
           
        </tr>
        <button className='text-black bg-slate-300 mt-2 ml-9 p-3' onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Taskcreation