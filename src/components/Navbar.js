"use client"
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import {useSidenav} from './Hooks/context-sidebar'
import Link from 'next/link';


function Navbar() {

  const [ Nav , setNav ] = useSidenav() 

  return (
    <div className='Nav'>
      <div className='cont'>
        <div className='first'>
          <div>
            BLUE S
          </div>
          <p>Order your suit</p>
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
    </div>
  )
}

export default Navbar;