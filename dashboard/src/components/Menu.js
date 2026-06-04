import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const params = new URLSearchParams(window.location.search);

const userName = params.get("user") || "Guest";

const firstLetter = userName.charAt(0).toUpperCase();


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    window.location.href = "https://zerodha-clone-r6u9.onrender.com" ;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile">
          <div
            className="avatar"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            {firstLetter}
          </div>

          <p
            className="username"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            {userName}
          </p>

          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "20px",
                background: "white",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                zIndex: 1000,
              }}
            >
              {isProfileDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "20px",
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    minWidth: "150px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      fontWeight: "bold",
                    }}
                  >
                    {userName}
                  </div>

                  <div
                    onClick={handleLogout}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
