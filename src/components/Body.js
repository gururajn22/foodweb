// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";

// const Body = () => {
//   const [listofRestaurant, setListofRestaurant] = useState([]);
//   const[serachText,setSearchText]=useState("");
//   const[filteredRestaurant,setFilterRestaurant]=useState([]);
//   // const[topRatedRestaurant,setTopRatedRestaurant]=useState([]);
//   console.log("body renderd");

//   useEffect(() => {
//     fetchdata();
//     console.log("useEffect called");
//   },[]);

//   const fetchdata=async()=>{
//     try{
//     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879576&lng=77.5374662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

//    const json=await data.json();
//   console.log(json);
//     setListofRestaurant(
//       json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilterRestaurant(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     // setTopRatedRestaurant(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }catch(error){
//       console.error('error fetching restaurant data',error);
//     }
//   };
//   // return listofRestaurant.length===0 ?( <Shimmer/>):(
//     const onlineStatus=useOnlineStatus();
// if(onlineStatus===false) return <h1>Looks like no internet check your connection</h1>

// if(listofRestaurant&&listofRestaurant.length===0){
//   return <Shimmer/>
// }

// return(
//     <div className="body">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input type="text" className="border-solid border-black" value={serachText} onChange={(e)=>{
//            setSearchText(e.target.value);
//           }}/>
//           <button className="px-4 bg-blue-400  ml-5"
//           onClick={()=>{
//       const filteredRestaurant= listofRestaurant.filter((res)=> res.info.name.toLowerCase().includes(serachText.toLowerCase()));
//         setFilterRestaurant(filteredRestaurant);
//            } }>Search</button>
//         </div>
//         <div className="m-4 p-4 flex">
//          <button className="px-4 py-1 bg-blue-400 flex items-center"
//           onClick={() => {
//             const filteredList = listofRestaurant.filter(
//               (res) => res.info.avgRating > 4
//             );
//             setListofRestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//         </div>
//        </div>
//       <div className="res-container">
//         {filteredRestaurant?.map((Restaurants) => (
//           <Link  key={Restaurants.info.id}   to={ "/restaurant/" + Restaurants.info.id} ><RestaurantCard  resData={Restaurants} /></Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [serachText, setSearchText] = useState("");
  console.log(listofRestaurant);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879576&lng=77.5374662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setListofRestaurant(
        json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurant(
        json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant data", error);
    }
  };

  const realTimeSearch = (e) => {
    const serachText1 = e.target.value.toLowerCase();
    setSearchText(serachText1);
    const filteredRestaurant = listofRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(serachText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like no internet, check your connection</h1>;
  }

  if (listofRestaurant && listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
 <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="search-box flex items-center space-x-4 sm:mb-0 sm:mr-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 ml-10 focus:outline-none focus:border-blue-400"
              value={serachText}
              onChange={realTimeSearch}
              placeholder="Search for restaurants"
            />
          </div>
           
          <button className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mt-4 sm:mt-0" onClick={
            () => {
              const filteredList1 = listofRestaurant.filter(
                (res) => res.info.sla.deliveryTime<30
              );
              setFilterRestaurant(filteredList1);
            }
          }>
            Fast Delivery
          </button>
          <button
            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mt-4 sm:mt-0"
            onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mt-4 sm:mt-0" onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.costForTwo>="₹300" && res.info.costForTwo<="₹600"
              );
              setFilterRestaurant(filteredList);
            }}>
            Rs.300-Rs.600
          </button>
           <button className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mt-4 sm:mt-0" onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.costForTwo<"₹300" 
              );
              setFilterRestaurant(filteredList);
            }}>
           Less than Rs.300
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRestaurant?.map((Restaurants) => (
            <Link
              key={Restaurants.info.id}
              to={"/restaurant/" + Restaurants.info.id}
            >
              <RestaurantCard resData={Restaurants} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
  // const { setName, loggedUser } = useContext(UserContext);
//   return (
//     <div className="bg-gray-100 min-h-screen py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div className="search-box flex items-center space-x-4">
//             <input
//               type="text"
//               className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
//               value={serachText}
//               onChange={realTimeSearch}
//               placeholder="Search for restaurants"
//             />
//           </div>
//           <button
//             className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
//             onClick={() => {
//               const filteredList = listofRestaurant.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setListofRestaurant(filteredList);
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="1.25em"
//               viewBox="0 0 512 512"
//             >
//               <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
//             </svg>
//           </button>
//           {/* <div>
//             <label>username:</label>
//             <input className="p-2 m-2" value={loggedUser} onChange={(e)=>{
//               setName(e.target.value);
//             }} />
//           </div> */}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredRestaurant?.map((Restaurants) => (
//             <Link
//               key={Restaurants.info.id}
//               to={"/restaurant/" + Restaurants.info.id}
//             >
//               <RestaurantCard resData={Restaurants} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Body;
 