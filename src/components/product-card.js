import { useState } from "react";
import ProductDialog from "./product-dialog";
import "./product-card.css";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="btn" onClick={()=>setIsOpen(true)}>
        <div className="card">
          <h2>{product.brand}</h2>
          <img
            src={product.images[0]}
            alt={product.brand}
            style={{ width: "12rem", borderRadius: "5px" }}
          />
          <h4>${product.price}</h4>
          <p>{product.description}</p>
        </div>
      </button>
      
      <ProductDialog isOpen={isOpen} onClose={()=> setIsOpen(false)} />
    </div>
  );
};

export default ProductCard;
