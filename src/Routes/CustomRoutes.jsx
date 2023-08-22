import { Route, Routes } from "react-router-dom";
import Feature from "../compnents/feature/Feature";
import Newarrival from "../compnents/Newarrival";
import Bestseller from "../compnents/Bestseller";
import Home from "../Home";
import Productpage from "../compnents/product page/productpage";

function Customroutes(){
    return(
        <Routes>
          <Route path="/"  element={<Home/>}/>
        <Route path="/feature" element={<Feature/>} />
        <Route path="/new-arrival" element={<Newarrival/>} />
        <Route path="/best-seller" element={<Bestseller/>} />
        <Route path="/product/:id" element={<Productpage/>} ></Route>
      </Routes>
    )
}

export default Customroutes;