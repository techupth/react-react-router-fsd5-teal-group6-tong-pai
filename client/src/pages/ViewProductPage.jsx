import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function ViewProductPage() {
  const [viewData, setViewData] = useState([]);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const getDataView = async () => {
    try {
      const results = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      );
      setViewData(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataView();
  }, []);
  return (
    <div>
      <h1>View Product Page</h1>

      <div className="view-product-container">
        <h2>Product Title : {viewData.name}</h2>
        <p>Content: {viewData.description}</p>
      </div>

      <button onClick={handleSubmit}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
