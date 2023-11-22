import React, { useState } from "react";
import Menu from "./Menu";

const MenuCard = ({ menuItems, index, show, handleClick }) => {
  return (
    <>
      <div className="flex justify-center align-middle">
        <div
          onClick={() => handleClick(index)}
          className="w-8/12 m-2 p-2 font-bold border-r-2 rounded cursor-pointer  bg-slate-200"
        >
          <div className="flex justify-between">
            <h3 className="text-lg">
              {menuItems?.card?.card?.title} - (
              {menuItems?.card?.card?.itemCards.length})
            </h3>
            <div className="mr-2 mt-2">
              <svg
                className={`w-6 h-6 dark:text-white ${
                  show ? "rotate-0" : "rotate-180"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <div className="w-8/12">
          {show === index && <Menu data={menuItems?.card?.card?.itemCards} />}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
