import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../context/Store";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  return (
    <li className="items" key={product._id}>
      <Link to={`/products/${product.slug}`}>
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <h3>{product.name}</h3>
        <p className="brand">{product.brand}</p>
        <p className="price">${product.price}</p>
      </Link>
      <button
        className="primary-button"
        type="button"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </li>
  );
};

export default ProductItem;
