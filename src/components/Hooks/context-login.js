"use client"
import { useState, createContext ,useContext } from "react";
import React from "react";

const LogsContext = createContext(undefined)

export const LogsProvider = ({children}) =>{

    const [logs , setLogs] = useState(false)  

    return <LogsContext.Provider value={[logs , setLogs]}>
        {children}
    </LogsContext.Provider>
}

export const useLogs = () => useContext(LogsContext);