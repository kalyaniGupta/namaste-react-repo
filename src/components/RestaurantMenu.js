import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, SWIGGY_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const param = useParams();

  let { resId } = param;
  // resId =  "15490"
  console.log(resId);

  const [restaurant, setRestaurant] = useState(null);
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    console.log(json.data?.cards[0]?.card?.card?.info);
    setRestMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(
      "resturantMenu",
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <h1>Reastaurant id: {resId}</h1>
      <h1>Reastaurant Name: {restaurant?.name}</h1>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
      <h3>{restaurant?.area}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating} star</h3>
      <h4>₹ {restaurant?.costForTwo / 100} for two</h4>
      <p>
        Menu:
        {restMenu.map((card) => {
          return card?.card?.info.name;
        })}
      </p>
    </>
  );
};

export default RestaurantMenu;
