import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    navigate("/product/create");
  };
  const handleView = (id) => {
    navigate(`/product/view/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={handleSubmit}>Create Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    onClick={() => {
                      handleView(product.id);
                    }}
                    className="view-button"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(product.id);
                    }}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  deleteData(product.id);
                }}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
