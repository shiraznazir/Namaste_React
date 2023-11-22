import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";
import useMenu from "../../utils/useMenu";
import MenuCard from "./MenuCard";

const ResturantMenu = () => {
  const { id } = useParams();
  const resInfo = useMenu(id);
  const [show, setShow] = useState(0);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = (params) => {
    if (params === show) {
      setShow("");
    } else {
      setShow(params);
    }
  };

  return (
    <>
      <div className="card m-4">
        <div className="">
          <div className="text-center">
            <h2 className="font-bold p-2 text-lg">{name}</h2>
            <p className="font-bold p-2 text-base">
              {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
          </div>
        </div>
        <hr class="w-10/12 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="container">
          {categories?.map((menuItems, index) => (
            <MenuCard
              show={show}
              handleClick={handleClick}
              index={index}
              menuItems={menuItems}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantMenu;
{
  /* <MenuCard key={menuItem?.card?.info?.id} menuItem={menuItem} /> */
}
