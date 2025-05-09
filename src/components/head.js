"use client"
import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import Link from 'next/link'
function Head (){


    return (
        <div className="head">
            <div className='Background'>
                <div>
                    BLUE S
                </div>
            </div>
            <div className='home'>
                <div>
                <h1>order your special<br/>suit online</h1><Link href="/Sections" className='ord'>
                    <button>ORDER NOW</button></Link>
                <div className='ico'>
                <Link href="/" style={{color:"white"}}><AiFillGithub size={25} /></Link>
                <Link href="/" style={{color:"white",}}><AiFillInstagram size={25} /></Link>
                <Link href="/" style={{color:"white",}}><AiFillTwitterCircle size={25} /></Link>
                </div>
                </div>
                <div className='s'>
                <Link href='https://github.com/mostafa72xs/'>Github</Link>
                </div>
            </div>
        </div>
    )
};


export default Head;