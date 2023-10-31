import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
import { Logo } from "../../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleInput = (res) => {
    dispatch(addItems(res));
  };
  return ( 
    <div>
      {items.map((res) => ( 
        <div
          key={res.card?.info?.id}
          className="p-2 mb-6 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{res.card?.info?.name}</span>
              <span>
                {" "}
                {"₹"}
                {res.card?.info?.price
                  ? res.card?.info?.price / 100
                  : res.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-left mt-1">{res?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-5">
            <div className="absolute">
              <button
                onClick={()=>handleInput(res)}
                className="p-1 my-16 bg-white shadow-lg mx-10 rounded-lg hover:bg-red-500"
              >
                ADD
              </button>
            </div>
            <img src={Logo + res.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
