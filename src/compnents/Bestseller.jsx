import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Slider from "react-slick"; // Import react-slick components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bestseller.css"
import Home from "../Home";

function Bestseller() {
  const [bestseller, setBestseller] = useState([]);
  const newurl = `https://api.escuelajs.co/api/v1/products?offset=0&limit=7`;

  useEffect(() => {
    const bestsellerurl = async () => {
      const url_get = await axios.get(newurl);
      setBestseller(url_get.data);
      console.log(url_get.data);
    };
    bestsellerurl();
  }, []);

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 5, // Show 5 products at a time
    slidesToScroll: 1,
  };

  return (
    <div className="best-seller">
      <Home/>
      <Slider {...settings}>
        {bestseller.map((product, index) => (
          <div className="product-link" key={index}>
            <Link to={`/product/${product.id}`}>
              <div className="product-detail">
                <img src={product.images[1]} alt="image" />
                <p className="product-text-overview">{product.title}</p>
                <p>price: $ {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Bestseller;
