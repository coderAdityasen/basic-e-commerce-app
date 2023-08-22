import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Feature from "./compnents/feature/Feature";
import Newarrival from "./compnents/Newarrival";
import Bestseller from "./compnents/Bestseller";
import "./Home.css"

function Home() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
      setClicked(true);
  };
  return (
    
      <div className="container">
        <div className="home">
         
            <Link className="btn" to="/feature">
               <button
                 className={clicked ? "clicked" : ""}
                 onClick={handleButtonClick} >  Feature </button>
                </Link>
         
          
            <Link className="btn" to="/new-arrival">
              <button 
               className={clicked ? "clicked" : ""}
               onClick={handleButtonClick} >  New Arrival</button>
                </Link>
          
         
            <Link className="btn" to="/best-seller">
              <button 
               className={clicked ? "clicked" : ""}
               onClick={handleButtonClick} >   Best Seller  </button>
                </Link>
        
        </div>
        
      </div>
   
  );
}

export default Home;
