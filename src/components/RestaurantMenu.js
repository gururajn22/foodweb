
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { Menu_Api } from "../../utils/constants";
// const RestaurantMenu=()=>{
    
//     const[resInfo,setResInfo]=useState(null);
//     const {resId}=useParams();
//     useEffect(()=>{
//  fetchDataApi();
//     },[]);
//     const fetchDataApi=async()=>{
//         try{
// const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9879576&lng=77.5374662&restaurantId=" + resId);
// const json= await data.json();
// console.log(json);
// setResInfo(json.data);

//         }
//         catch(error){
//             console.error("Error fetching restaurant data",error);
//         }
//     } ;
//    if(resInfo===null) return <Shimmer/>
//    const{name,cuisines,costForTwoMessage,areaName,city,avgRating}= resInfo?.cards[0]?.card?.card?.info;
//     const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//     return(
//         <div className="menu">
//             <h2>{name}</h2>
//             <h3>{cuisines.join(",")}</h3>
//             <h4>{areaName}</h4>
//             <h4>{city}</h4>
//             <h4>{costForTwoMessage}</h4>
//             <h4>{avgRating}</h4>
//             <h2>Menu</h2>
//             <ul>
              

// {itemCards.map(item=>  <li key={item.card.info.id}>{
//     item.card.info.name}-{"Rs."}{item.card.info.price/100  || item.card.info.defaultPrice/100} </li>
// )}

//                     {/* {itemCards[0].card.info.name}
//                     {itemCards[1].card.info.name}
//                     {itemCards[2].card.info.name} */}
                    
//             </ul>
//         </div>
//     )
// }-
// export default RestaurantMenu;


import { useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantApi from "../../utils/useRestaurantApi"
import RestaurantList from "./RestaurantList"


const RestaurantMenu = () =>{
    // const [ResInfo, setResInfo] = useState(null)
    const {resID} = useParams()
    const[showIndex,setShowIndex]= useState(null);
    const resInfo=useRestaurantApi(resID);
   const dummy="dummy data";
    

    // useEffect(() => {
    //     fetchMenu()
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970882&lng=77.500366&restaurantId=" + resID)
    //     const json = await data.json()
    //     console.log(json)
    //     setResInfo(json.data)
    // }
 if(resInfo === null ) return <Shimmer/>
    const{name, cuisines, costForTwoMessage,} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(itemCards)
    console.log("ok");
    const itemslist=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const itemCategory=itemslist.filter((ans)=>ans.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     console.log(itemCategory);
     return (
        <div className="text-center">
            <h1 className=" text-center font-bold mt-6 text-xl">{name}</h1>
            <p className="mt-6 font-bold text-lg">{cuisines.join(", ")}</p>
                <p>{costForTwoMessage}</p>
            
                 {
                    itemCategory.map((category,index)=>(
                        <RestaurantList  key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false}
                       setShowIndex={()=>setShowIndex(index)} dummy={dummy}
                        />
                    ))
                 }
                    {/* <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} {"Rs"}- {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu

   