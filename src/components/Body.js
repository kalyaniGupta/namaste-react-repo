import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//import resList from "../utils/mockData";

const Body = () => {

  //searchInput is Local state variable - super powerful variable
  const [searchText, setSearchText] = useState(""); // useState ----> to create a state variable

  //Local state variable - super powerful variable
  const [allResturant, setAllRestaurant] = useState([]); // this is array destructuring

  // episode 6 live-course changes for filtered list, shimmer, and early return
  const [filteredResturant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    console.log("useEffect");
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    let response = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    console.log(response);

    setAllRestaurant(response);
    setFilteredRestaurant(response);
  }

  //conditional rendering interview question
  // if(allResturant.length === 0){
  //   return <Shimmer></Shimmer>
  // }

  console.log("render");

  function onChangeOfInput(e) {
    setSearchText(e.target.value);
    console.log("e.target.value", e.target.value)

    if (e.target.value == "") {
      setFilteredRestaurant(allResturant);
    }
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return allResturant?.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter flex">
        {/* Search Functionality */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            placeholder="Search"
            value={searchText}
            onChange={(e) => onChangeOfInput(e)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
                // searchText
                console.log(searchText);
                const searchResult = allResturant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(searchResult);
            }}
          >
            Search
          </button>
        </div>
        {/* Top Rated Restaurant */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = allResturant.filter(
                (res) => res.info.avgRating > 4
              );
              // way of updating state variable
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
          {/* Live Update loggedIn user */}
        <div className="search m-4 p-4 flex items-center">
          <label className="p-1">Live Update UserName : </label>
          <input
            className="border border-solid border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

      </div>

      <div className="flex flex-wrap">
        {filteredResturant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            {/* <RestaurantCard resData={restaurant}  />  */}
            {/* if restaurant promoted is true then show promoted label on top of card else show normal card */}
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>      
        ))}
      </div>
    </div>
  );
};

export default Body;
