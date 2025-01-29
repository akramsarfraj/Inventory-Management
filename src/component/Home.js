import React from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <img className='logo-inven' src="/images/inventory.jpg" alt='inventory_image'></img>
            <div className='title-page'>
                <h2>Welcome to Inventory Manangement</h2>
                <p>You can add, edit or delete Inventory</p>


                <Link to="/add_inventory" className='link-add'>
                    <div className='add-item'>Add Item</div>
                </Link>


                <Link to="/inventory_table" className='link-view'>
                    <div className='view-inv'>View Inventorys</div>
                </Link>


            </div>

        </div>
    )
}

export default Home