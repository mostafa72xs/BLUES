"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/footer";
import Cart from '../components/Cart'
import Sidebar from '../components/Sidebar'
import { useSidenav } from "../components/Hooks/context-sidebar";



export async function getServerSideProps() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`);
  const pro = await res.json();

  return {
    props: { pro },
  };
}

function Section ({pro}){
    const [ Nav , setNav ] = useSidenav()
    
    return(
        <div className="Sections">
            {Nav &&(<Sidebar />)}
            <Cart />
            <Navbar />
            <Main pro={pro} />
            <Footer />
        </div>
    )
}

export default Section;