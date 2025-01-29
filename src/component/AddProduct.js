import React, { useState } from 'react'
import './css/AddProduct.css'
import { Alert } from 'react-bootstrap';

function AddProduct() {
  let [data, setDate] = useState({
    name: "",
    category: "",
    stock: "",
    unit_price: "",
    date: ""
  });

  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);

  let handleForm = (e) => {

    if (data.name == "" || data.category == "" || data.stock == "") {

      setEmpty(true);

    } else {
      fetch("http://localhost:8000/inventory", {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((res) => {
          console.log(res);
          setSuccess(true)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div className='addProduct'>
      {
        success === false ? <></> :
          <Alert className='message' variant="info" onClose={() => setSuccess(false)} dismissible>
            <Alert.Heading>SuccessFull ! Item Added </Alert.Heading>
            <p>
              Check the Inventory
            </p>
          </Alert>
      }
      {
         empty === false ? <></> :
          <Alert className='message' variant="warning" onClose={() => setSuccess(false)} dismissible>
            <Alert.Heading>Warning ! Empty Field</Alert.Heading>
            <p>
              Product name, category and stock is required
            </p>
          </Alert>
      }

      <div className='form'>
        <label>Product Name</label>
        <input type='text' value={data.name} onChange={(e) => { setDate({ ...data, "name": e.target.value }) }}></input>

        <label>Product Category</label>
        <input type='text' value={data.category} onChange={(e) => { setDate({ ...data, "category": e.target.value }) }}></input>

        <label>In stock</label>
        <input type='number' value={data.stock} onChange={(e) => { setDate({ ...data, "stock": e.target.value }) }}></input>

        <label>Unit Price</label>
        <input type='number' value={data.unit_price} onChange={(e) => { setDate({ ...data, "unit_price": e.target.value }) }}></input>

        <label>Add Date</label>
        <input type='date' value={data.date} onChange={(e) => { setDate({ ...data, "date": e.target.value }) }}></input>

        <button className='btn' onClick={handleForm}>Add Item</button>
      </div>
    </div>
  )
}

export default AddProduct