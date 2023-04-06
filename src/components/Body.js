import React from "react";
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  //Please do read README file for episode-05

  //Local state variable - super powerful variable
  const [listOfResturant, setListOfRestaurant] = useState(resList); // this is array destructuring

  //searchInput is Local state variable - super powerful variable
  const [searchInput, setSearchInput] = useState(""); // useState ----> to create a state variable

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("hi");
            const filteredList = listOfResturant.filter(
              (res) => res.data.avgRating > 4
            );
            // way of updating state variable
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={() => {}}>
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
