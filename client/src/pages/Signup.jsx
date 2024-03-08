import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'

const Signup = () => {
  const {data, setData}=useState({
    fullname:"",
    email:"",
    address:"",
    number:"",
    password:"",
    repossword:"",

  })
  const handleinput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handlesubmit=(e)=>{
    const password= data.password;
    const repassword=data.repassword;
    if(password===repassword){
      try {
        axios.post("http://localhost:5000/signup",{data})
     .then(res=res.json())
     .then (redirect('/login'))
      } catch (error) {
        console.log("error in fetching signup data")
      }
     
    }else{
      
    }
  }
  return (
    <div className='bg-gray-400 h-screen m-0 p-0'>
        
      <div className='bg-gray-800  p-10 h-100'>
        <h1 className='text-8xl text-white font-extrabold mb-10'>Sign up form</h1>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Full Name:</label></td>
            <td><input type='text' placeholder='full name' name='fullname' onChange={handleinput} /></td>
        </tr>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Email:</label></td>
            <td><input type='email' placeholder='Email' name='email' onChange={handleinput}/></td>
        </tr>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Address:</label></td>
            <td><input type='text' placeholder='Address' name='address' onChange={handleinput}/></td>
        </tr>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Number:</label></td>
            <td><input type='phone' placeholder='Number' name='number' onChange={handleinput}/></td>
        </tr>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Password:</label></td>
            <td><input type='text' placeholder='Password' name='password' onChange={handleinput}/></td>
        </tr>
        <tr>
            <td><label className='text-5xl text-white font-bold'>Re-Password:</label></td>
            <td><input type='password' placeholder='Re-Password' name='repassword' onChange={handleinput} /></td>
        </tr>
        <tr>
            <button className='mt-5 rounded-md text-4xl text-gray-800 bg-white font-bold'
            onClick={handlesubmit}
            >Submit</button>
        </tr>
        <tr><td className='mt-5 text-white text-3xl'>Already have Account <Link to='/login' className='text-cyan-300'>login</Link></td></tr>
      </div>
       
    </div>
  )
}

export default Signup