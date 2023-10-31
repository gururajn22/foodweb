import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "../../utils/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/");
  }
  const cartItems = useSelector((store) => store.cart.items);

  return (
      <div className="text-center m-4 p-4">
  <div className="w-6/12 m-auto">
    <ItemList items={cartItems} />
  </div>

  {cartItems.length === 0 && (
    <div className="mt-4 flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
      <div className="mt-2">
        <h2 className="text-center">
          Your cart is empty<br />
          <span>You can go to the home page to view more restaurants</span>
        </h2>
        <button className="mt-4 bg-blue-600 " onClick={handleClick}>SEE ALL RESTAURANTS NEAR YOU</button>
      </div>
    </div>
  )}

  {cartItems.length !== 0 && (
    <button
      onClick={handleClearCart}
      className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mt-4 sm:mt-0"
    >
      Clear Cart
    </button>
  )}
</div>
  );
};

export default Cart;


// {cartItems.length===0&&<div className="flex justify-center items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
//           <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
//         </svg>
//         <div>
//         <h2 className=" flex-col justify-center h-vh-100">
// Your cart is empty<br/><span>You can go to home page to view more restaurants</span>
// </h2>
// <button>SEE ALL RESTAURANTS NEAR YOU</button>
// </div>
//       </div>
// }
//       {cartItems.length!==0&&<button
//         onClick={handleClearCart}
//         className="m-2 p-2 bg-black text-white rounded-lg"
//       >
//         Clear Cart
//       </button>
// }