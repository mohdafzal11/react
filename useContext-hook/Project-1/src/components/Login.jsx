import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const {setUser}=useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault();
        setUser({userName,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder='UserName' />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder='Password' />
            <button onClick={handlesubmit}> Submit</button>
        </div>
    )
}

export default Login