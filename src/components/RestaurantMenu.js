import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const {resId} = useParams();
  
  //custom hook
  const restInfo = useRestaurantMenu(resId)
  console.log("restInfo", restInfo)

  // covering Prop Drilling concept
  // need to pass this dummy data to ItemList component child component of RestaurantCatagory component
  // RestaurantCatagory component is child of RestaurantMenu component
  const dummy = "Dummy Data"; 
  const [showIndex, setShowIndex] = useState(null);

  if(restInfo == null ) return <Shimmer/>

  const {name, cuisines, costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
  <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>
    {/* categories accordions */}
    {categories?.map((category, index) => (
      // "RestaurantCategory" controlled component control by parent ReastaurantMenu component
      <RestaurantCategory
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        dummy={dummy}
      />
    ))}
  </div>
)};

export default RestaurantMenu;
