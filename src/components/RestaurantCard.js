import { Logo } from "../../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime,accessibility,imageId
 } = resData.info;
    return (
        <div className="m-4 p-4 w-[280px] rounded-lg border hover:bg-amber-300">
            <img src={imageId}/>
            <h2>{accessibility}</h2>
            <img className="rounded-lg" src={Logo + cloudinaryImageId} alt={name} />
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-bold">{cuisines.join(" , ")}</h4>
            <h4 className="font-bold">{avgRating} stars</h4>
            <h4 className="font-bold">{costForTwo}</h4>
            <h4 className="font-bold">{deliveryTime} min</h4>
        </div>
    );
};


// Hiher order component
//input-restaurantcard
//output-restaurantcardPromoted


// export const isPromoted=(RestaurantCard)=>{
//     return(props)=>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props} />
//                 </div>
//         )
//     }
// }

export default RestaurantCard;
