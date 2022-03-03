import logo from './logo.svg';
import './App.css';
//Router
import { Routes, Route, Link } from "react-router-dom";



//Pages
import Home from "./Home.js"; 
import Product_page from './Product_page.js'


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Product_page />} />
         



      </Routes>
      


    
      
    </div> 
  );
}

export default App;
