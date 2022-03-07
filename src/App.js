import logo from './logo.svg';
import './App.css';
//Router
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';


//Pages
import Home from "./Home.js"; 
import Furniture_page from "./Furniture_page.js"; 
import Product_page from './Product_page.js'


function App() {


  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Product_page />} />
        <Route path="/Furniture" element={<Furniture_page />} />
         



      </Routes>
      


    
      
    </div> 
  );
}

export default App;
