
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
  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
       <img
        className="rounded-lg"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>₹ {costForTwo / 100} for two</h4>
      <h4>{avgRating} star </h4>
      <h4>{deliveryTime} minutes </h4> 
      {/* <h4>{cuisines.join(", ")}</h4> */}
    </div>
  );
};

export default RestaurantCard;
