import { useEffect, useState } from "react";

function Boxdetails3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(r => r.json())
      .then(response => {
        setData(response);
      })
      .catch(e => alert('Fetch error: ' + e)); // Handle fetch errors
  }, []); // Empty dependency array ensures useEffect runs only once

  let datalist = [];

  // Using a for loop to construct JSX
  for (let i = 0; i < data.length; i++) {
    datalist.push(
      <li key={i}>
        <strong>ID:</strong> {data[i].id} <br />
        <strong>Model:</strong> {data[i].Model}
      </li>
    );
  }

  return (
    <div>
      <h1>Details</h1>
      <ul>
        {datalist}
      </ul>
    </div>
  );
}

export default Boxdetails3;
