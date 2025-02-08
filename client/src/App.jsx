import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<h1>Home page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
