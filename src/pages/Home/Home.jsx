import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="card">
        <img className="card-image" src="https://via.placeholder.com/300x200" alt="Card Image"/>
        <div className="card-content">
          <h2 className="card-title">Card Title</h2>
          <p className="card-description">This is a simple card template. You can customize it as needed.</p>
        </div>
      </div>
    </div>
  )
}

export default Home