import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  console.log(products, "products");
  return (
    <>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products?.map((product) => {
          return (
            <div className="cartCard">
              <img src={product.image} alt="" srcset="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product._id)}>
                Remove 
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
