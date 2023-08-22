import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productpage.css"

function Productpage() {
    const [productPage, setProductPage] = useState([]);
    const { id } = useParams();
    const id_url = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(id_url);
                setProductPage([response.data]); 
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchDetail();
    }, []);

    return (
        <>
            {productPage.map((elem, index) => (
                <div className="product-container" key={index}>
                    <div className="img-section">
                        <img className="single-product-image" src={elem.image} alt="" />
                    </div>
                    <div className="single-product-detail">
                        <h1>{elem.title}</h1>
                        <p>{elem.description}</p> 
                        <h2>Price: <span>${(elem.price * 1.1).toFixed(2)}</span> ${elem.price}</h2>
                    </div>
                </div>
            ))}
        </>
    );
}
export default Productpage;



