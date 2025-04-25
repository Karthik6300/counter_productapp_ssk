import React, { useEffect, useState } from "react";
// import CSS from "./assets/App.css"

function Count() {
  const [count, setcount] = useState(1);
  const [dataa, setData] = useState([1]);

  // const data = fetch("https://fakestoreapi.com/products/1")

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]);
  console.log(dataa, " cfbhnjkm,l.");
  function handleIncre() {
    setcount(count + 1);
  }
  function handleReset() {
    setcount(1);
  }
  function handleDecre() {
    setcount(count - 1);
  }
  return (
    <>
      <div className="card-container">
        <img
          src={dataa.image}
          alt="product image"
          width="300px"
          height="300px"
        />
        <p> {dataa.title}</p>
        <p>{dataa.price}</p>
        <p>{dataa.description}</p>
      </div>
      {/* <p>dataa : {dataa.img}</p> */}
      {/* <img src="" alt="" /> */}
      <div>
        <h1>Counter :{count} </h1>

        <button onClick={handleIncre}>Incre</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecre}>Decre</button>
      </div>
    </>
  );
}
export default Count;
