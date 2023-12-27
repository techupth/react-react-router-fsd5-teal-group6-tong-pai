import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const results = await axios("http://localhost:4001/products");
    setProducts(results.data.data);
    console.log(results.data.data)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          <Route path={"/product/view/:id"} element={<ViewProductPage />} />
           
          <Route path="/product/create" element={<CreateProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
