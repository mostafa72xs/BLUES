"use client"
import { useState, createContext ,useContext } from "react";
import React from "react";

const SidenavContext = createContext(undefined)

export const SidebarProvider = ({children}) =>{

    const [Nav , setNav] = useState(false)  

    return <SidenavContext.Provider value={[Nav , setNav]}>
        {children}
    </SidenavContext.Provider>
}

export const useSidenav = () => useContext(SidenavContext);