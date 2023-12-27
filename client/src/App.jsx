import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path={"/product/view/:productId"} element={<ViewProductPage />} />
          <Route path={"/product/edit/:productId"} element={<EditProductPage />} />

          <Route path="/product/create" element={<CreateProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
