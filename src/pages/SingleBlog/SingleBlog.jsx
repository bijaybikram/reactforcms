import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
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

  useEffect(() => {
    fetchSingleBlog()
  }, [])
  

  return (
    <>
      <div className="card" key={blog._id}>
          <div className="card-content">
            <h2 className="card-title" >{blog.title}</h2> 
            <h5 className="card-subtitle" >{blog.subTitle}</h5> 
            <p className="card-description">{blog.description}</p>
          </div>
        </div>
    </>
  )
}

export default SingleBlog