"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useResult } from '../components/Hooks/shippingContext';
import Sidebar from '../components/Sidebar';
import { useSidenav } from '../components/Hooks/context-sidebar';
import Image from 'next/image'



function Checkout() {
    const [Nav, setNav] = useSidenav();
    const [result, setResult] = useResult();
    const items = useSelector((state) => state.cart?.items || []);
  
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = parseFloat(result) || 0;
    const totalres = totalPrice + shippingCost;

    return (
        <div>
            {Nav && <Sidebar />}
            <Navbar />
            <div className='container out mt-5'>
                <p>Home / <b>Checkout</b></p>
                <h1 className='mb-3 out'>Billing Details</h1> 
                <div className='d-flex ch21'>
                    <div className='Address'>
                        <label>First Name</label>
                        <input type='text' placeholder='Your Name' />
                        <label>Company Name</label>
                        <input type='text' placeholder='Company Name' />
                        <label>Street Address</label>
                        <input type='text' placeholder='Street Address' />
                        <label>Apartment, floor, etc (optional)</label>
                        <input type='text' placeholder='Address' />
                        <label>Town/City</label>
                        <input type='text' placeholder='Town/City' />
                        <label>Phone Number</label>
                        <input type='number' placeholder='Phone Number' />
                        <label>Email Address</label>
                        <input type='email' placeholder='Email Address' />
                        <div style={{ display: 'flex' }}>
                            <input type='checkbox' className='checksbox' />
                            <p>Save this information for faster checkout next time</p>
                        </div>
                    </div> 
                    <div className='check302'>
                        <ul className='ip301'>
                            {items.map((item, index) => (
                                <li key={index} className='x300'>
                                    <div className='d-flex'>
                                        <Image src={item.img} alt={item.name} height={50} width={50} />
                                        <p className='para'>{item.name}</p>
                                    </div>
                                    <p>${item.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='tot mt-3'>
                            <div className='subtot d-flex'>
                                <p>SubTotal</p>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className='subtot d-flex'>
                                <p>Shipping</p>
                                <p>${shippingCost.toFixed(2)}</p>
                            </div>
                            <div className='subtot d-flex'>
                                <p>Total</p>
                                <p>${totalres.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className='radio ml-2 mt-2'>
                            <div className='rad'>
                                <input id='bank' type='radio' name='money' value='bank' />
                                <label htmlFor='bank'>Bank</label>
                            </div>
                            <div className='rad'>
                                <input id='cash' type='radio' name='money' value='cash' />
                                <label htmlFor='cash'>Cash</label>
                            </div>  
                        </div>
                        <div className='cou ml-2'>
                            <input type='text' placeholder='Coupon Code' />
                            <button>Apply Coupon</button>
                        </div>
                        <Link href='/error'>
                            <button className='po'>Place Order</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;
