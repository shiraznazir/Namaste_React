import React, { useEffect, useState } from "react";
import ResturantCards from "./ResturantCards";
import { MENU_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useResturants from "../../utils/useResturants";

const Body = () => {
  const listOfResturant = useResturants(MENU_API);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (listOfResturant?.length > 0) {
      setFilteredData(listOfResturant);
    }
  }, [listOfResturant]);

  return (
    <>
      <div className="body">
        <div className="filter flex flex-row">
          <div className="search m-4 p-4">
            <input
              type="text"
              placeholder="Search for anything..."
              name="search"
              className="p-2 border-2 border-solid border-black rounded-lg"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filterResturant = listOfResturant?.filter((element) =>
                  element.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
                setFilteredData(filterResturant);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filterResturant = listOfResturant.filter(
                  (element) => element?.info?.avgRating > 4
                );
                setFilteredData(filterResturant);
              }}
            >
              Top Rated Resturant
            </button>
          </div>
        </div>
        {filteredData?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="m-2 flex flex-wrap justify-center">
            {filteredData?.map((resturant) => {
              return (
                <ResturantCards
                  key={resturant?.info?.id}
                  cloudinaryImageId={resturant?.info?.cloudinaryImageId}
                  name={resturant?.info?.name}
                  id={resturant?.info?.id}
                  cuisines={resturant?.info?.cuisines}
                  avgRating={resturant?.info?.avgRating}
                  deliveryTime={resturant?.info?.sla?.deliveryTime}
                  costForTwo={resturant?.info?.costForTwo}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
