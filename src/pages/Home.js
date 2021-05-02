import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Ini Home</h1>
      <Link to='/kedua'>Ke halaman kedua</Link>
    </div>
  )
}

export default Home
