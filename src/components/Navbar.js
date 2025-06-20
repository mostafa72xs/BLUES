"use client"
import React , {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import {useSidenav} from './Hooks/context-sidebar'
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import Login from './Login';
import { useLogs } from './Hooks/context-login';

function Navbar() {

  const [ Nav , setNav ] = useSidenav() 
  const [ logs , setLogs ] = useLogs(false)
  const { data: session } = useSession();



  
  return (
    <div className='Nav'>
      <div className='cont'>
        <div className='first'>
          <div className='brandblue' style={{textAlign:'center'}}>
            <div className='logog'>
            BLUE S
          </div>
          <p>Order your suit</p>
          </div>
          <div className='momo'>
            {!session ? 
        <button  className='btnlogs' onClick={() => setLogs(true)}>
          Login
        </button>
        : <div className='account'>
          <p style={{ fontSize: '16px' }}>
            Welcome {session.user && session.user.name}
            <p style={{ fontSize: '12px' }}>
              {session.user && session.user.email}
            </p>
          </p>
            <button  className='btnlogs' onClick={() => signOut()}>Logout</button>
        </div>
      }
          </div>
          <button className='burgericon' onClick={() => setNav(true) }>
            <CiMenuBurger />
          </button>
        </div>
      </div>
      <div className='cont2'>
      <ul>
          <li><Link href='/Sections'>Home</Link></li>
          <li><Link href='/Store'>Shop</Link></li>
          <li><Link href='/About'>About</Link></li>
          <li><Link href='/Contact'>Contact us</Link></li>
        </ul>
      </div>
      {logs? 
      <Login  
        close={() => setLogs(false)}
        />
        : ''
      }
    </div>
  )
}

export default Navbar;