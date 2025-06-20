import React from 'react'
import { useState } from 'react'
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { useLogs } from './Hooks/context-login';


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  const [logs , setLogs] = useLogs()  


    const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.ok && !res.error) {
      alert('you logged in successfully')
      setLogs(false)

    } else {
      setError("Invalid email or password");
    }
  };
    


  return (
    <div className='login'>
        <div className='logform'>
            <button className='closebtnt' onClick={props.close}>
                X
            </button>
                <h1 style={{color:'black'}}>Login</h1>
            <form onSubmit={handleLogin}>
              {error && <p style={{ color: "red" , fontSize:'12px' }}>{error}</p>}
                <div>
                    <label>Email Address</label>
                <input type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                </div>
                <div>
                    <label>Password</label>
                <input type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                </div>
                
                <button type='submit'>
                    Log in
                </button>
                
            </form>
            <Link href='/Signup' className='linkedup' style={{color:'black'}}>Sign up</Link>
        </div>
    </div>
  )
}

export default Login