import React, { useState } from 'react'
import './CreateBlog.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const createBlog = async (e) => {
    e.preventDefault()
    const data = {
      title: title,
      subTitle: subTitle,
      description: description
    }
    // send above states data to API
    const response = await axios.post("http://localhost:3000/blogs", data)
    if (response.status == 201) {
      // alert(response.data.message)
      navigate("/")
    }
    
  }
  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={createBlog}>
        <h2>Create a Blog Post</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
        
        <label htmlFor="subTitle">Subtitle:</label>
        <input type="text" id="sub-title" name="subTitle" placeholder="Enter subtitle" onChange={(e)=>setSubTitle(e.target.value)}/>
        
        <label htmlFor="description">Description:</label>
        <textarea id="content" name="description" placeholder="Enter blog content" rows="6" onChange={(e)=>setDescription(e.target.value)}></textarea>
        
        <input type="submit" value="Submit"/>
      </form>
    </div>
    </>
  )
}

export default CreateBlog