import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data.products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Wait for a while until we load the products</h2>;
  }

  return (
    <div className="shop">
      <h1>Shop Products</h1>

      <div className="product-grid">
        {   products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <Link to={`/product/${product.id}`}> <button>View Details</button> </Link>                         
                </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;