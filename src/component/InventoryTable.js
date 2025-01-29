import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import './css/InventoryTable.css'
import { Link } from 'react-router-dom';


function InventoryTable() {

  let [inventory, setInventory] = useState([]);
  let [deleted, setDelete] = useState(false)
  let [sort,setSort] = useState("")
  
  let color = {
    backgroundColor: "yellow",
  }

  let url = ``
  if(sort===""){
    url = `http://localhost:8000/inventory`
    console.log(url);
  }else{
    url = `http://localhost:8000/inventory?_sort=${sort}`
    console.log(url);
    
  }

  useEffect(() => {

    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setInventory(data)
      })
      .catch((err) => {
        console.log(err);

      })
    setDelete(false)
    console.log("UseEffect call");

  }, [deleted,sort])



  let deleteInventory = (id) => {
    fetch(`http://localhost:8000/inventory/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDelete(true)
      })
      .catch((err) => {
        console.log(err);

      })
  }


  return (
    <div className='inventoryTable' >

      <div className='sort-section'>
        
        <select onChange={(e) => {
          setSort(e.target.value)
        }} defaultValue="Sort By" className='form-select form-select-sm'>
          <option value="Sort By">Sort By</option>
          <option value="name">Name</option>
          <option value="stock">Stock</option>
          <option value="unit_price">Unit price</option>
          <option value="date">Date</option>
        </select>
        <button onClick={()=>{setSort("")}} className='btn-select'>Reset</button>
      </div>

      <Table className='striped bordered hover' style={{ marginTop: "10px" }}>
        <thead>
          <tr className='table-h'>
            <th>id</th>
            <th>name</th>
            <th>category</th>
            <th>stocks</th>
            <th>unit Price</th>
            <th>date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>


        <tbody>
          {
            inventory.map((data) => {
              if (data.stock < 10) {
                return (
                  <tr key={data.id} className='table-d'>
                    <td style={color}>{data.id}</td>
                    <td style={color}>{data.name}</td>
                    <td style={color}>{data.category}</td>
                    <td style={color}>{data.stock}</td>
                    <td style={color}>{data.unit_price}</td>
                    <td style={color}>{data.date}</td>
                    <td style={color}><button className='btn-e'><Link to={`/update_inventory/${data.id}`}>Edit</Link></button></td>
                    <td style={color}><button className='btn-d' onClick={() => { deleteInventory(data.id) }}>Delete</button></td>
                  </tr>
                )
              } else {
                return (
                  <tr key={data.id} className='table-d'>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.category}</td>
                    <td>{data.stock}</td>
                    <td>{data.unit_price}</td>
                    <td>{data.date}</td>
                    <td><button className='btn-e'><Link to={`/update_inventory/${data.id}`}>Edit</Link></button></td>
                    <td><button className='btn-d' onClick={() => { deleteInventory(data.id) }}>Delete</button></td>
                  </tr>
                )
              }

            })
          }
        </tbody>


      </Table>

      <div className='info'>
        <p>Yellow Column Indicate the stock is below 10</p>
      </div>
    </div>
  )
}

export default InventoryTable