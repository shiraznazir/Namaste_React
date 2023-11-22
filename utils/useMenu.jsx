import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

const useMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    console.log("res cards data ", data);
    const json = await data.json();
    setResInfo(json.data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  console.log("resInfo ", resInfo);
  return resInfo;
};

export default useMenu;
