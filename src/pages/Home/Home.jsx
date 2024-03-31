import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import axios from 'axios'
import Button from '../../components/Button/Button'

const Home = () => {

  const [blogs, setBlogs] = useState([])


  // Api call
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs")
      if (response.status == 200) {
        setBlogs(response.data.blogs)
      }
      
    } catch (error) {
      alert("something went wrong!")
    }
    
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  
  // console.log(blogs, "Blogs")
  return (
    
      <div>
      <Navbar/>
      {blogs.map((blog) => {
        return(
          
        <div className="card" key={blog._id}>
          <div className="card-content">
            <h2 className="card-title" >{blog.title}</h2> 
            <h5 className="card-subtitle" >{blog.subTitle}</h5> 
            <p className="card-description">{blog.description}</p>

          </div>
          <Button name="Readmore"/>
        </div>
          )
        })}
    </div>
    
    
  )
}

export default Home