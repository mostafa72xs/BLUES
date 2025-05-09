"use client"
import { useState, useEffect, createContext, useContext } from "react";
import React from "react";

const ResultContext = createContext(undefined);

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(() => {
    // Get initial value from localStorage
    const storedResult = localStorage.getItem("result");
    return storedResult ? JSON.parse(storedResult) : '5';
  });

  useEffect(() => {
    // Save to localStorage whenever result changes
    localStorage.setItem("result", JSON.stringify(result));
  }, [result]);

  return (
    <ResultContext.Provider value={[result, setResult]}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
