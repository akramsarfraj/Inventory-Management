import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/EditProduct.css'
import { Alert } from 'react-bootstrap';

function EditProduct() {

  let { id } = useParams()
  let [data,setDate] = useState({});
  const [success, setSuccess] = useState(false);
  

  let handleForm=()=>{
        fetch(`http://localhost:8000/inventory/${id}`,{
          method:"PUT",
          body:JSON.stringify(data)
        })
        .then((res)=>{
          console.log(res);
          setSuccess(true)
        })
        .catch((err)=>{
          console.log(err);
        })
  }

  useEffect(()=>{
    fetch(`http://localhost:8000/inventory/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((d) => {
      console.log(d);
      
       setDate(d)
    })
    .catch((err)=>{
      console.log(err);
      
    })

    
    
  },[id])

  console.log("render");
  return (
    <div className="editProduct">
      {
        success === false ? <></> :
          <Alert className='message' variant="info" onClose={() => setSuccess(false)} dismissible>
            <Alert.Heading>SuccessFull ! Item Added </Alert.Heading>
            <p>
              Check the Inventory
            </p>
          </Alert>
      }
      <div className='form'>
            <label>Product Name</label>
            <input type='text' value={data.name} onChange={(e)=>{ setDate({...data,"name":e.target.value} ) } }></input>

            <label>Product Category</label>
            <input type='text' value={data.category} onChange={(e)=>{ setDate({...data,"category":e.target.value} ) } }></input>

            <label>In stock</label>
            <input type='number' value={data.stock} onChange={(e)=>{ setDate({...data,"stock":e.target.value} ) } }></input>

            <label>Unit Price</label>
            <input type='number'value={data.unit_price} onChange={(e)=>{ setDate({...data,"unit_price":e.target.value} ) } }></input>

            <label>Add Date</label>
            <input type='date' value={data.date} onChange={(e)=>{ setDate({...data,"date":e.target.value} ) } }></input>

            <button className='btn' onClick={handleForm}>Update Item</button>
        </div>
    </div>
  )
}

export default EditProduct