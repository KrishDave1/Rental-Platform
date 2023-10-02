import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [details, setDetails] = useState([]);
  const [employee,setEmployees] = useState('');
  const [department,setDepartment] = useState('');

  const handleEmployeeChange = (event) => {
    setEmployees(event.target.value);
  }

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  }

  const handleSubmit = () => {
    const data = {
      employee : employee,
      department : department,
    };
    axios.post('http://localhost:8000/',data)
    .then((response) => {
      console.log('Item added to database', response.data);
    })
    .catch((error) => {
      console.error('Error adding item to the database : ',error);
    })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products')
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <header>Data Generated from Django</header>
      <hr></hr>
      {details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
          </div>
        </div>
      ))}
      <div>
        <div>
          <label>Employee:</label>
          <input type="text" value={employee} onChange=   {handleEmployeeChange} />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" value={department} onChange= {handleDepartmentChange} />
        </div>
        <button onClick={handleSubmit}>Add Item</button>
      </div>
    </div>
  );
}

export default App;

