import { useState } from 'react'
import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import UpdateBlog from './pages/UpdateBlog/UpdateBlog'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/createBlog' element={<CreateBlog/>}/>
    <Route path='/single' element={<SingleBlog/>}/>
    <Route path='/update' element={<UpdateBlog/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
