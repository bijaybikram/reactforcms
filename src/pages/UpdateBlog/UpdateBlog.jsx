import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UpdateBlog.css'
import Navbar from '../../components/Navbar/Navbar'

const UpdateBlog = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState({})
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name)
    const {name, value} = e.target
    setBlog({
      ...blog,
      [name]: value
    })
  }
  
  // fetching the blog information
  const fetchBlog =  async () => {
    const response = await axios.get('http://localhost:3000/blogs/'+ id)
    if(response.status == 200){
      setBlog(response.data.data)
    }else{
      alert("Something went wrong!")
    }
  }

  // updating the blog information 
  const updateBlog = async(e) => {
    e.preventDefault()
    const response = await axios.patch('http://localhost:3000/blogs/'+ id, blog)
    if(response.status == 200) {
      navigate('/singleBlog/'+ id)
    }

  }
  const keysToIgnore = ["createdAt", "updatedAt"]
  keysToIgnore.forEach((key) => {
    delete blog[key]
  });

  useEffect(() => {
    fetchBlog()
    // updateBlog()
  }, [])
  
  return (
    <div>
      <Navbar/>
      <form onSubmit={updateBlog}>
        <h2>Update your Blog Post</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} placeholder="Enter title" value={blog.title} />
        <label htmlFor="subTitle">Subtitle:</label>
        <input type="text" id="sub-title" name="subTitle" onChange={handleChange} placeholder="Enter subtitle" value={blog.subTitle} />
        
        <label htmlFor="description">Description:</label>
        <textarea id="content" name="description" onChange={handleChange} placeholder="Enter blog content" rows="6" value={blog.description}></textarea>
        
        <input type="submit" value="Update"/>
      </form>
    </div>
  )
}

export default UpdateBlog