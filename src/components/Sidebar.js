"use client"
import React from "react";
import { useSidenav } from "./Hooks/context-sidebar";
import Link from "next/link";

function Sidebar(props) {
  const [ Nav , setNav ] = useSidenav()
  return (
    <div className="sidebars">
    <div className="tit">
      <h1>Blue S</h1>
      <button className="exitb" onClick={() => setNav(!Nav)}>
            X
        </button>
    </div>
      <ul>
        <li>
          <Link href="/Sections">Home</Link>
        </li>
        <li>
          <Link href="/Store">Shop</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
