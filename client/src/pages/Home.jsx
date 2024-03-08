import React, { useState } from 'react'
import { redirect } from 'react-router-dom';

import Taskcreation from '../components/taskcreation';
import TaskStatus from '../components/TaskStatus';
import Dashboard from '../components/Dashboard';
import TaskHistory from '../components/TaskHistory';
const Home = () => {
  const[value, setvalue]=useState("dashboard");
  const handlelogout=()=>{
    return redirect('/login')
  }

  return (
    <div className='m-0 p-0 bg-black font-bold text-white text-xl display: flex flex-row justify-center items-center'>
      
      <nav className='flex-1 bg-red-500 p-4 h-screen w-3/10 border-2 border-blue-700'>
      
      <ul className='pt-10 '>
        <li><button className='text-5xl hover:bg-red-800 rounded-lg p-2 active:bg-red-800' value="dashboard" onClick={(e)=>setvalue(e.target.value)}
        >Dashboad</button></li>
        <li><button className='text-5xl hover:bg-red-800 rounded-lg p-2' value="task_creation" onClick={(e)=>setvalue(e.target.value)}

        >Task Creation</button></li>
        <li><button className='text-5xl hover:bg-red-800 rounded-lg p-2' value="task_status" onClick={(e)=>setvalue(e.target.value)}

        >Task status</button></li>
        <li><button className='text-5xl hover:bg-red-800 rounded-lg p-2' value="task_history" onClick={(e)=>setvalue(e.target.value)}

        >Task History</button></li>
      
      </ul>
      <ul className='pt-10'>
        <li><button className='rounded-full bg-slate-400 text-5xl p-5' onClick={handlelogout}>Log out</button></li>
      </ul>
      </nav>
      <body className='flex-1 bg-green-500 p-4 w-7/10 h-screen' >
        <h1>Task Management</h1>
        {value==='dashboard' && (
          <div>
           <Dashboard/>
          </div>
        )}
        {value==='task_creation' && 
        <div className='bg-black h-90'>
<Taskcreation/>
        </div>
        }
        
        {value==='task_status' && (
          <div className='h-4/5 grid grid-cols-4 gap-4 relative '>
            <title className='text-white text-2lg'>Task Status</title>
           <TaskStatus/>
          </div>
        )}
        {value==='task_history' && 
        <div className='bg-white h-4/5'>
        <TaskHistory/>
       </div>
        }
      </body>
    </div>
  )
}

export default Home