import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const {data, setData}=useState({
       email:"",
        password:"",
    })
    const handleinput=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const handlesubmit=()=>{
      try {
        axios.post("http://localhost:5000/login",{data})
.then(res=>res.json())
      } catch (error) {
        console.log("error in sending login data to backend")
      }

    }

  return (
    <div className='bg-gray-400 h-screen m-0 p-0'>
        
    <div className='bg-gray-800  p-10 h-800 w-300'>
      <h1 className='text-8xl text-white font-extrabold mb-10'>Log in</h1>
      <tr>
          <td><label className='text-5xl text-white font-bold'>Email:</label></td>
          <td><input type='email' placeholder='Email' name='email' onChange={handleinput} /></td>
      </tr>
      <tr>
          <td><label className='text-5xl text-white font-bold'>Password:</label></td>
          <td><input type='password' placeholder='Password' name='password'  onChange={handleinput}/></td>
      </tr>
      
      <tr>
            <button className='mt-5 rounded-md text-4xl text-gray-800 bg-white font-bold hover:bg-blue-800 active:bg-blue-800' onClick={handlesubmit}>Submit</button>
        </tr>
        <tr><td className='mt-5 text-white text-3xl'>Don't have Account <Link to='/signup' className='text-cyan-300'>signup</Link></td></tr>
  </div>
  </div>
  )
}
export default Login