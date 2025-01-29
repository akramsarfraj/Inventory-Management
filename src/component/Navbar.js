import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
       <div className='logo'>
            <img src='icons8-inventory-16.png' alt='logo' height="20px" width="20px"></img>
       </div>
       <div className='links'>
            <Link to={"/"} className='link'>Home</Link>
            <Link to={"/add_inventory"} className='link'>Add Item</Link>
            <Link to={"/inventory_table"} className='link'>Inventorys</Link>
       </div>
    </div>
  )
}

export default Navbar