import React from "react";
import { useState } from "react";
import './user.css'
const Users = () => {
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);
  };
  const decrement = () => {
    setData(data - 1);
  };
  return (
    <div>
      <h1>{data}</h1>
      <div className="btn">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Users;
