import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'

const SingleBlog = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [blog, setBlog] = useState({})
  // console.log(id)
  const fetchSingleBlog = async() => {

    const response = await axios.get('http://localhost:3000/blogs/'+ id)
    // console.log(response)
    if(response.status == 200){
      setBlog(response.data.data)
    }
  }
  // console.log(blog)
  // deleting blog
  const deleteBlog = async () => {
    try{
      const response = await axios.delete('http://localhost:3000/blogs/'+ id)
      if(response.status == 200){
        navigate('/')
      }
    }catch(error){
      console.log("something went wrong!")
    }
  }


  useEffect(() => {
    fetchSingleBlog()
  }, [])
  

  return (
    <>
    <Navbar/>
      <div className="card">
          <div className="card-content">
            <h2 className="card-title" >{blog.title}</h2> 
            <h5 className="card-subtitle" >{blog.subTitle}</h5> 
            <p className="card-description">{blog.description}</p>
            <Button onClick = {deleteBlog} name="Delete"/>
            {/* <Button navigate = {`/updateBlog/${blog.id}`} name="Delete"/> */}
            <Link to={`/updateBlog/${blog._id}`}>Update</Link>
          </div>
        </div>
    </>
  )
}

export default SingleBlog