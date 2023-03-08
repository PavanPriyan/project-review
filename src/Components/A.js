import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./A.css"
 
function A() {
 
    const [eb, seteb] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(response => {
                seteb(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            <h1>Eb Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Units</th>
                        <th>Bill</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {eb.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td>{e.units}</td>
                            <td>{e.bill}</td>
                            <td>{e.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default A;