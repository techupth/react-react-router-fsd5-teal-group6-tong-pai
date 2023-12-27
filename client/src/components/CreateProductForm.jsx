import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateProductForm() {
  const [addName, setAddName] = useState("");
  const [addImageUrl, setAddImageUrl] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addName || !addImageUrl || !addPrice || !addDescription) {
      setError("Please fill in all fields.");
      return;
    }
    postData();
  };
  const postData = async () => {
    try {
      const newData = {
        name: addName,
        image: addImageUrl,
        price: addPrice,
        description: addDescription,
      };
      await axios.post("http://localhost:4001/products", newData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={addName}
            placeholder="Enter name here"
            onChange={(e) => {
              setAddName(e.target.value);
            }}
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
            value={addImageUrl}
            placeholder="Enter image url here"
            onChange={(e) => {
              setAddImageUrl(e.target.value);
            }}
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
            value={addPrice}
            placeholder="Enter price here"
            onChange={(e) => {
              setAddPrice(e.target.value);
            }}
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
            value={addDescription}
            placeholder="Enter description here"
            onChange={(e) => {
              setAddDescription(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default CreateProductForm;
