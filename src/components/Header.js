import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        {" "}
        {/* Use NavLink instead of Link*/}
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </NavLink>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Search Icon */}
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* Nav Bar */}
      <div className="header_nav"></div>
      <div className="header_option">
        <span className="header_optionLineOne">Hello Guest</span>
        <span className="header_optionLineTwo">Sign In</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
        <span className="header_optionLineTwo">& Orders</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
      </div>
      <NavLink to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span
            className="header_optionLineTwo 
                    header_basketCount"
          >
            0
          </span>
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
