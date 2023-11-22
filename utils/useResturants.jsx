import { useState, useEffect } from "react";

const useResturants = (MENU_API) => {
  const [resturants, setResturants] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API);
    const _data = await data.json();
    console.log("_data ", _data?.data?.cards);
    const __data =
      _data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(__data);
  };

  return resturants;
};

export default useResturants;
