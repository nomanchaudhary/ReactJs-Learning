import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h1>Login Form</h1>
      <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder='Username' />
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
