import logo from './logo.svg';
import './App.css';
//Router
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';


//Pages
import Home from "./Home.js"; 
import Furniture_page from "./Furniture_page.js"; 
import Product_page from './Product_page.js';
import Footer from './Footer.js'; 


function App() {


  /*
  dynamic routing 
  <Route path='Furniture/:id' element={<Product_page />} />

  */

  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Furniture/:id" element={<Product_page />} />
        <Route path="/Furniture" element={<Furniture_page />} />
        <Route path="*" element ={<Home />}/> 
         



      </Routes>
      <Footer /> 
      


    
      
    </div> 
  );
}

export default App;
