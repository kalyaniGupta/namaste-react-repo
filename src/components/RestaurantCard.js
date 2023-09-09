
//importing from named export
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

   const {
    cloudinaryImageId,
    name,
    avgRating,
    //cuisines,
    costForTwo,
    deliveryTime,
  } = resData.info;
    console.log("resData", resData)
    // style={{ backgroundColor: "lightgrey" }}
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-green-200" >
       <img
        className="rounded-lg "
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>₹ {costForTwo / 100} for two</h4>
      <h4>{avgRating} star </h4>
      <h4>{deliveryTime} minutes </h4> 
      {/* <h4>{cuisines.join(", ")}</h4> */}
    </div>
  );
};




// HOC
// input Restaurant card return RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;