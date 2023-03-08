import React, { useState } from 'react';
import "./Post.css";


function Post() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setaddress] = useState('');
  const [units, setunits] = useState('');
  const [bill, setbill] = useState('');
  const [dueDate, setdueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      name: name,
      address: address,
      units: units,
      bill: bill,
    dueDate: dueDate
    };

    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className='head'>Add Details</h1>

    <form onSubmit={handleSubmit} className='fo'>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Address:</label>
        <input type="text" id="address" name="address" value={address} onChange={event => setaddress(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Units:</label>
        <input type="text" id="units" name="units" value={units} onChange={event => setunits(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Bill:</label>
        <input type="text" id="bill" name="bill" value={bill} onChange={event => setbill(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">DueDate:</label>
        <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={event => setdueDate(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Post;