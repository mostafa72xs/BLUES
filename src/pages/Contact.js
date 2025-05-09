"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Sidebar from '../components/Sidebar';
import { useSidenav } from '../components/Hooks/context-sidebar';
import Cart from '../components/Cart';



function Contact() {
    const [ Nav , setNav ] = useSidenav()
  return (
    <div>
        {Nav &&(
                        <Sidebar />)}
                        <Cart />
                <Navbar />
                
        <div className='contact'> 
            <div style={{fontSize:'21px'}}>Home / Contact</div>
        <div className='cont21'>
            <div className='boxtex'>
                <div className='texts'>
                    <div style={{borderBottom: '1px solid grey'}}>
                        <h1 style={{fontSize: '16px'}}><FaPhone color='#013D47' />  Call Us</h1>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div>
                        <h1 style={{fontSize: '16px'}}><MdEmail color='#013D47' />  Write To Us</h1>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
            <div className='forms'>
                <form>
                    <div>
                        <input type='email' placeholder='Your Email'/>
                        <input type='password' placeholder='Your Password'/>
                        <input type='number' placeholder='Your Phone'/>
                    </div>
                    <input className='mass' type='text' placeholder='Your Massage' />
                    <button>Send Massage</button>
                </form>
            </div>  
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
