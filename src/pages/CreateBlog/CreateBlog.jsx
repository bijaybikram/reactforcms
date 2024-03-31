import React, { useState } from 'react'
import './CreateBlog.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  
  const createBlog = async (e) => {
    e.preventDefault()

    // Predefined react method to extract form input datas in object using DOM formdata 
    const formData = new FormData(e.currentTarget)
    // FIRST APPROACH
    // console.log(formData.get('title'))
    // const data = {
    //   title: formData.get("title"),
    //   subTitle: formData.get("subTitle"),
    //   description: formData.get("description"),
    // }

    // SECOND APPROACH
    // changing the given formData data format from array to key value object notation and inserting them on data variable
    const data = Object.fromEntries(formData)

    
    // send above states data to API
    const response = await axios.post("http://localhost:3000/blogs", data)
    if (response.status == 201) {
      alert(response.data.message)
      navigate("/")
    }else{
      alert("Something went wrong!")
    }
    
  }
  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={createBlog}>
        <h2>Create a Blog Post</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" placeholder="Enter title" />
        
        <label htmlFor="subTitle">Subtitle:</label>
        <input type="text" id="sub-title" name="subTitle" placeholder="Enter subtitle" />
        
        <label htmlFor="description">Description:</label>
        <textarea id="content" name="description" placeholder="Enter blog content" rows="6" ></textarea>
        
        <input type="submit" value="Submit"/>
      </form>
    </div>
    </>
  )
}

export default CreateBlog