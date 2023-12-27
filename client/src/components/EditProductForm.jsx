import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const result = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );

    setProduct(result.data.data);
  }

  function addEditItemDetail(event) {
    const copyProduct = { ...product };
    copyProduct[event.target.id] = event.target.value;
    setProduct(copyProduct);
  }

  async function editItem(event) {
    event.preventDefault();

    console.log(params.productId);
    await axios.put(`http://localhost:4001/products/${params.productId}`, {
      ...product,
    });
    navigate("/");
  }

  return (
    <form className="product-form" onSubmit={editItem}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            value={product.name}
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              addEditItemDetail(event);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            value={product.image}
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              addEditItemDetail(event);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            value={product.price}
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              addEditItemDetail(event);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            value={product.description}
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              addEditItemDetail(event);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
