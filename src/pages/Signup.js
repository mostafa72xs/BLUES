import React , { useState } from 'react'
import { useLogs } from '../components/Hooks/context-login'


function Signup() {    
        const [ name , setName ] = useState('')
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [ logs , setLogs ] = useLogs()
    
    
    const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password }),
});

const data = await res.json();
console.log(data);

if (res.ok) {
  alert("Signup successful. Now login.");
  window.location.href = "/Sections";
  setLogs(true)
} else {
  alert("Signup failed: " + data.message);
}
  };

  
  return (
    <div className='head'>
      <div className='home slicedHome'>
        <h1>Signup</h1>
            <form className='formind' onSubmit={handleSignup}>
              <div>
                <label>Name</label>
                <input type='text'
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
                <div>
                  <label>Email Address</label>
                <input type='email'
                placeholder='Your Email Address'
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
                  Signup
                </button>
            </form>
      </div>
        <div className='Background slicedBack' style={{width:"70%"}}>
          <div>
              BLUE S
          </div>
        </div>
    </div>
  )
}

export default Signup