"use client"
import React from 'react';
import MainS from '../components/MainS.js';
import Navbar from '../components/Navbar.js'
import Cart from '../components/Cart.js';
import Sidebar from '../components/Sidebar.js'
import { useSidenav } from "../components/Hooks/context-sidebar.js";

export async function getStaticProps() {
    const res = await fetch('https://api-chi-teal-89.vercel.app/api');
    const pro = await res.json();
    
  
    return {
      props: { pro },
    };
  }

function Store({pro}) {
    const [ Nav , setNav ] = useSidenav()
return (
    <div>
        {Nav &&(
                <Sidebar />)}
        <Cart />
        <Navbar />
        <MainS Data={pro.message} />
    </div>
)
}

export default Store;