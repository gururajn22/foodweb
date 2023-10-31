// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
// import { useSelector } from "react-redux/es/hooks/useSelector";

// const Header = () => {
//   const [btnName, setBtnName] = useState("Login");

//   const onlineStatus = useOnlineStatus();

//   // const {loggedUser}=useContext(UserContext);

//   //subscribing to the store using a Selector (subscribing to small poriton of the store-itmes)

//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <nav className="">
//       <div className="flex justify-between items-center">
//         <Link to="/" className="text-2xl font-semibold">
//           FoodMania
//         </Link>
//         <div className="flex space-x-6">
//           <Link to="/">Home</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/options">Sign In</Link>
//           <Link to="/cart">Cart-({cartItems.length} items)</Link>
//           {/* <Link to="/grocery">Grocery</Link> */}
//         </div>
//         <div className="flex items-center">
//           <p className="mr-2">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
//           {/* <p>{loggedUser}</p> */}
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => {
//               btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
//             }}
//           >
//             {btnName}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
// import { useSelector } from "react-redux/es/hooks/useSelector";

// const Header = () => {
//   const [btnName, setBtnName] = useState("Login");
//   const[isMobile,setIsMobile]=useState(false);
//   const onlineStatus = useOnlineStatus();

//   const cartItems = useSelector((store) => store.cart.items);
// const toggleMenu=()=>{
//   setIsMobile((prev)=>!prev);
//   console.log("ok");
// }
//   return (
//     <nav className="bg-blue-600 py-2 px-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-semibold text-white">
//           FoodMania
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-gray-300">
//             Home
//           </Link>
//           <Link to="/about" className="text-white hover:text-gray-300">
//             About Us
//           </Link>
//           <Link to="/options" className="text-white hover:text-gray-300">
//             {btnName}
//           </Link>
//           <Link to="/cart" className="text-white hover:text-gray-300">
//             Cart ({cartItems.length} items)
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <p className="text-white mr-2">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
//           <button
//             className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800"
//             onClick={() => {
//               btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
//             }}
//           >
//             {btnName}
//           </button>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button className="text-white" onClick={toggleMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Theme from "./Theme";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMobile, setIsMobile] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-white">
          FoodMania
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-300">
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  ({cartItems.length} items)
             </span>
          </Link>
          <p><Theme/></p>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div className="md:hidden absolute top-16 right-0 w-40 bg-blue-600 py-2 px-4 space-y-2">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link><br/>
            <Link to="/about" className="text-white hover:text-gray-300">
              About Us
            </Link><br/>
            <Link to="/cart" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> ({cartItems.length} items)
            </Link>
            <p><Theme/></p>
          </div>
        )}
       
      </div>
    </nav>
  );
};

export default Header;


 {/* Other Header Elements */}
        {/* <div className="flex items-center"> */}
          {/* <p className="text-white mr-2">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </p> */}
          {/* <button
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button> */}
        {/* </div> */}