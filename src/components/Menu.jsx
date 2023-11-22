import React from "react";
import { CDN_URL2 } from "../../utils/constants";
import NoImage from "../assets/no_image.png";

const Menu = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div>
          <div className="px-1 py-1 flex justify-between align-middle bg-white">
            <h1>
              {item?.card?.info?.name} - {" ₹ " + item?.card?.info?.price / 100}
            </h1>
            <img
              className="rounded"
              width="200px"
              height="50px"
              src={
                item?.card?.info?.imageId === ""
                  ? NoImage
                  : CDN_URL2 + item?.card?.info?.imageId
              }
              alt=""
            />
          </div>
          {index !== data.length - 1 && (
            <hr class="h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          )}
        </div>
      ))}
    </>
  );
};

export default Menu;
