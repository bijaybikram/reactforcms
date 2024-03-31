import React, { useState } from 'react'
import './CreateBlog.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
  })

  const createBlog = async (e) => {
    e.preventDefault()

    // Predefined react method to extract form input datas in object using DOM formdata 
    // const formData = new FormData(e.currentTarget)
    
    // send above states data to API
    const response = await axios.post("http://localhost:3000/blogs", data)
    if (response.status == 201) {
      alert(response.data.message)
      navigate("/")
    }else{
      alert("Something went wrong!")
    }
    
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={createBlog}>
        <h2>Create a Blog Post</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} placeholder="Enter title" />
        <label htmlFor="subTitle">Subtitle:</label>
        <input type="text" id="sub-title" name="subTitle" onChange={handleChange} placeholder="Enter subtitle" />
        
        <label htmlFor="description">Description:</label>
        <textarea id="content" name="description" onChange={handleChange} placeholder="Enter blog content" rows="6" ></textarea>
        
        <input type="submit" value="Submit"/>
      </form>
    </div>
    </>
  )
}

export default CreateBlog