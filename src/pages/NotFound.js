import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1>Halaman tidak ditemukan</h1>
      <Link to='/'>Balik ke halaman utama</Link>
    </div>
  )
}

export default NotFound
