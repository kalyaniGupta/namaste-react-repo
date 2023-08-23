import React, { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const Body = () => {
  //Please do read README file for episode-05

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

  return allResturant?.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
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
      {/* Search Functionality */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => onChangeOfInput(e)}
        />
        <button
          className="search-btn"
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

      <div className="res-container">
        {filteredResturant?.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
