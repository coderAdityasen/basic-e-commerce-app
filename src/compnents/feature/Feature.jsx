import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./feature.css"
import Home from "../../Home";


function Feature() {
  const [feature, setFeature] = useState([]); 
  const url = `https://fakestoreapi.com/products?limit=5`;

  useEffect(() => {
    const fetch_url = async () => {
      const url_get = await axios.get(url);
      setFeature(url_get.data);
      console.log(url_get.data);
    };
    fetch_url();
  }, []);

  return (
    <>
      <div className="feature">
        <Home/>
        <div className="product-container">
          {feature.map((product, index) => (
            <Link className="product-link" key={index}  to={`/product/${product.id}`} >
          <div className="product-deatail">
            <img src={product.image} alt="image" />
            <p className="product-text-overview">{product.title}</p>
            <p>price: $ {product.price}</p>
          </div>
          </Link>
        ))}
        </div>
      
      </div>
    </>
  );
}

export default Feature;
