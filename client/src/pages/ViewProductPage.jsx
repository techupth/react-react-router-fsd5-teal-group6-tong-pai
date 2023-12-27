import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewProductPage() {

  const params = useParams();
  const [product, setProduct]= useState([])


  useEffect(() => {
    getPost();
  }, []);

  

  async function getPost()
  {
    
   const results = await axios.get(`http://localhost:4001/products/${params.productId}`)
    setProduct(results.data.data)

  }

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <Link to ="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default ViewProductPage;
