import React, { useState } from "react";
import logo from "../assets/res_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Dot from "../components/Common/Dot";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const online = useOnline();

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="w-full p-0 m-0 fixed shadow-md">
      <div className="flex justify-between bg-sky-200">
        <img className="w-20 h-30" alt="logo" src={logo} />
        <div>
          <ul className="m-2 p-2 flex flex-row">
            <li className="mx-2 my-1 px-1 py-1">
              <Dot online={online} />
            </li>
            <li className="m-2 p-2">
              <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                <h2 className="text-xl text-white">Home</h2>
              </Link>
            </li>
            <li className="m-2 p-2">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <h2 className="text-xl text-white">About Us</h2>
              </Link>
            </li>
            <li className="m-2 p-2">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <h2 className="text-xl text-white">Contact Us</h2>
              </Link>
            </li>
            <li className="m-2 p-2">
              <Link
                to="/groceries"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <h2 className="text-xl text-white">Groceries</h2>
              </Link>
            </li>
            <li className="m-2 p-2">
              <h2 className="text-xl text-white">Cart</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
