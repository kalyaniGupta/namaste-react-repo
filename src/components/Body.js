import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

//import resList from "../utils/mockData";

const Body = () => {

  //searchInput is Local state variable - super powerful variable
  const [searchText, setSearchText] = useState(""); // useState ----> to create a state variable

  //Local state variable - super powerful variable
  const [allResturant, setAllRestaurant] = useState([]); // this is array destructuring

  // episode 6 live-course changes for filtered list, shimmer, and early return
  const [filteredResturant, setFilteredRestaurant] = useState([]);

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
      </div>

      <div className="flex flex-wrap">
        {filteredResturant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant}  /> 
          </Link>      
        ))}
      </div>
    </div>
  );
};

export default Body;
