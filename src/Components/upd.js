import React, { useState, useEffect } from 'react';
import "./upd.css";

function Upd() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    // Fetch the post data using the ID passed in the URL
    const postId = window.location.pathname.split('/').pop();
    fetch(`http://localhost:8080/put}`)
      .then(response => response.json())
      .then(data => {
        setId(data.id);
        setName(data.name);
        setAddress(data.address);
        setUnits(data.units);
        setBill(data.bill);
        setDueDate(data.dueDate);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        // show an error message here
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post ={ id, name, address, units, bill, dueDate };
    fetch(`http://localhost:8080/put`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Post updated successfully');
        // redirect to the post details page here
      })
      .catch(error => {
        console.error('Error updating post:', error);
        // show an error message here
      });
  };

  return (
    <div>
      <h1 className='hd'>Update Report</h1>
      <form onSubmit={handleSubmit} className='frm'>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)} />
        <br></br>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br></br>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
        <br></br>
        <label htmlFor="">Units</label>
        <input type="text" id="units" value={units} onChange={(event) => setUnits(event.target.value)} />
        <br></br>
        <label htmlFor="">Bill</label>
        <input type="text" id="bill" value={bill} onChange={(event) => setBill(event.target.value)} />
        <br></br>
        <label htmlFor="">DueDate</label>
        <input type="date" id="dueDate" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        <br></br>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Upd;