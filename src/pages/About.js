"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'
import { useSidenav } from '../components/Hooks/context-sidebar'
import Cart from '../components/Cart'
import Image from 'next/image'



function About() {
  const [ Nav , setNav ] = useSidenav()
  return (
    <div>
        {Nav &&(<Sidebar />)
                }<Cart />
                <Navbar />
                
        <div className='container about'>
          <div className='tags d-flex'>Home /About</div>
          <div className='d-flex tworow'>
            <div className='tex'>
              <div className='center'>
                <h1>Our Story</h1>
                <p>Launced in 2015, BlueS is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, BlueS has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>BlueS has more than 1 Million products to offer, growing at a very fast. BlueS offers a diverse assotment in categories ranging  from consumer.</p>
              </div>
            </div>
            <div className='ime'>
              <Image src='https://img.freepik.com/free-photo/portrait-bearded-male-dressed-grey-jacket-hat-isolated-grey-background_613910-3150.jpg?t=st=1740405067~exp=1740408667~hmac=931b58b1013b46e5dcacf9061d730329d50d8078b74536d2d86c8b2b3868ceab&w=1060' alt='img' height={609} width={702} />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
