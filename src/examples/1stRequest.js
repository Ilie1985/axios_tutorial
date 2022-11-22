import { useEffect, useState } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log("try log", data);
      setProducts(data);
    } catch (error) {
      console.log("catch error log", error.response);
    }
  };

  useEffect(() => {
    console.log("first axios request");
    fetchData();
  }, [products]);

  const showData = () => {
    setShowProduct(true);
  };

  return (
    <div>
      <h2 className="text-center">first request</h2>
      {showProduct && (
        <div>
          {products.map((product) => {
            const { category, description, name, image, price, id } = product;
            const cost = price.toFixed(2);
            return (
              <div key={id}>
                <h4>{category}</h4>
                <h5>{name}</h5>
                <p>{description}</p>
                <img src={image} alt={name} />
                <p>${cost}</p>
              </div>
            );
          })}
        </div>
      )}
      <button className="btn" onClick={showData}>
        show data
      </button>
    </div>
  );
};
export default FirstRequest;
