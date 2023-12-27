import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [newProduct, setNewProduct] = useState({});

  const navigate = useNavigate();

  function addProductDetail(event) {
    let copyNewProduct = { ...newProduct };

    copyNewProduct[event.target.id] = event.target.value;

    setNewProduct(copyNewProduct);
  }

  async function addProduct(event) {
    event.preventDefault();

    await axios.post("http://localhost:4001/products", { ...newProduct });

    navigate("/");
  }

  return (
    <form className="product-form" onSubmit={addProduct}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              addProductDetail(event);
            }}
            value={newProduct.name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              addProductDetail(event);
            }}
            value={newProduct.image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              addProductDetail(event);
            }}
            value={newProduct.price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              addProductDetail(event);
            }}
            value={newProduct.description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
