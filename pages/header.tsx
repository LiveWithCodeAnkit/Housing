import { GiHamburgerMenu } from "react-icons/gi";


import { header } from "../components/constant/Header";

import { useState } from "react";
import Button from "@/components/Button";

const Header = () => {
  const navLists = header;

  const [showSearchBox, setShowSearchBox] = useState(false);

  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const handleSearchClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <>
      <nav>
        <img src="./logowhite.svg" />

        <ul>
          {navLists.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <img
          src="./Search.svg"
          className="search-box"
          onClick={handleSearchClick}
        />
        {showSearchBox && (
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <Button title="Search" />
          </div>
        )}
        <div
          className={
            showMediaIcon ? "mobile-menu-link" : "mobile-menu-link-off"
          }
        >
          <ul>
            {navLists.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
            <li className="mobile-get-start">
              <button className="mobile-button">Get Started</button>
            </li>
          </ul>
        </div>
        <Button className="submit-button-nav  btn-submit" title="Get Started" />
        <div className="humbugger">
          <a
            href="#"
            onClick={() => {
              setShowMediaIcon(!showMediaIcon);
            }}
          >
            <GiHamburgerMenu
              style={{ color: "#0061e0" }}
              className="icon-of-menu"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
