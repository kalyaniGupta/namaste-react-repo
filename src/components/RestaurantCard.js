const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cuisines,
    costForTwo,
    name,
    deliveryTime,
    avgRating,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹ {costForTwo / 100} for two</h4>
      <h4>{avgRating} star </h4>
      <h4>{deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
