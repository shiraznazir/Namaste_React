import React from "react";
import { CDN_URL } from "../../utils/constants";
import NoImage from "../assets/no_image.png";
import { Link } from "react-router-dom";

const ResturantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  id,
}) => {

  return (
    <div className="m-2 p-2 bg-gray-100 hover:bg-gray-200 border-2 border-solid border-blue-200 rounded-lg ">
      <Link to={`/resturant/${id}`}>
        <div className="">
          <img
            className="w-64 rounded-lg"
            src={
              cloudinaryImageId === "" ? NoImage : CDN_URL + cloudinaryImageId
            }
            alt="img"
          />
          <h4 className="w-64 font-bold">{name}</h4>
          <p className="w-64">{cuisines?.join(", ")}</p>
          <div className="w-64">
            <h4 className="font-semibold">
              Rating: <span className="font-normal">{avgRating}</span>
            </h4>
            <h4>{deliveryTime} min</h4>
            <h5>{costForTwo}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResturantCards;
