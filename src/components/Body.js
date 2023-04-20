import React from "react";
import { useState, useEffect } from "react"; /* Import using Named Import */

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../utils/constants";

const Body = () => {
  //Please do read README file for episode-05

  //searchInput is Local state variable - super powerful variable
  const [searchText, setSearchText] = useState(""); // useState ----> to create a state variable

  //Local state variable - super powerful variable
  const [allResturant, setAllRestaurant] = useState([]); // this is array destructuring

  // episode 6 live-course changes for filtered list, shimmer, and early return
  const [filteredResturant, setFilteredRestaurant] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    console.log("useEffect");
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      let tempData = json?.data?.cards[2]?.data?.data?.cards;

      console.log(tempData);

      setAllRestaurant(tempData);
      setFilteredRestaurant(tempData);
      setErrorMsg("");
    } catch (error) {
      console.log("error", error);
      setErrorMsg(error);
    }
  }

  function filterData(searchInput, list) {
    if (searchInput != "") {
      //good practice to put optional chaining so that you wont get somthing undefined error
      let filteredResult = list.filter((item) =>
        item?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(filteredResult);
      setErrorMsg("");

      if (filteredResult?.length == 0) {
        setErrorMsg("No matches found");
      }
      return filteredResult;
    } else {
      setErrorMsg("");
      return list;
    }
  }

  console.log("render");

  function onChangeOfInput(e) {
    setSearchText(e.target.value);

    if (e.target.value == "") {
      //  setListOfRestaurant(resList);
    }
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allResturant) {
    //Early Return
    return null;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allResturant.filter(
              (res) => res.data.avgRating > 4
            );
            // way of updating state variable
            setFilteredRestaurant(filteredList);
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
          value={searchText}
          onChange={(e) => onChangeOfInput(e)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const resultData = filterData(searchText, allResturant);
            // update the state ---> restaurant list
            setFilteredRestaurant(resultData);
          }}
        >
          Search
        </button>
      </div>
      {/* 1st way {errorMsg ? <div>{errorMsg}</div> : ""} */}
      {/* 2nd way */}
      {errorMsg && <div>{errorMsg}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allResturant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredResturant.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
