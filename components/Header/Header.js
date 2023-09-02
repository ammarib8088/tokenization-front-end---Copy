"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Sidebar from "../Sidebar/sidebar";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        height: "120px",
        width: "100%",
        padding: "0 16px",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#737373",
        }}
      >
        <Sidebar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "200px",
            position: "relative",
            marginRight: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Ara..."
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #737373",
              borderRadius: "30px",
              padding: "8px",
              backgroundColor: "white",
              color: "#737373",
              paddingLeft: "50px", // Add padding left for the icon
            }}
          />
          <svg
            style={{
              position: "absolute",
              top: "50%",
              left: "16px", // Adjust the left position to center the icon vertically
              transform: "translateY(-50%)", // Center the icon vertically
              color: "#737373",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.77 18.3C9.28071 18.3 7.82486 17.8584 6.58656 17.031C5.34826 16.2036 4.38312 15.0275 3.81319 13.6516C3.24326 12.2757 3.09414 10.7616 3.38469 9.30096C3.67523 7.84029 4.3924 6.49857 5.44549 5.44548C6.49858 4.39239 7.84029 3.67523 9.30097 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7589 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43658 5.76118C6.44988 6.42046 5.68085 7.35754 5.22672 8.45389C4.7726 9.55025 4.65378 10.7566 4.88529 11.9205C5.1168 13.0844 5.68825 14.1535 6.52736 14.9926C7.36648 15.8317 8.43557 16.4032 9.59946 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1625 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"
              fill="#888888"
            />
            <path
              d="M20 20.75C19.9015 20.7505 19.8038 20.7312 19.7128 20.6935C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0698 15.1388 15.8755C15.1423 15.6812 15.221 15.4958 15.3584 15.3584C15.4958 15.221 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6705 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6705 20.3894 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6935C20.1962 20.7312 20.0985 20.7505 20 20.75Z"
              fill="#888888"
            />
          </svg>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="notifications"
            style={{ marginRight: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="19.5"
                stroke="#F3F3F3"
                stroke-opacity="0.97"
              />
              <path
                d="M22.9072 25.4872V26.2564C22.9072 27.0725 22.6009 27.8551 22.0558 28.4321C21.5107 29.0092 20.7714 29.3333 20.0005 29.3333C19.2297 29.3333 18.4903 29.0092 17.9452 28.4321C17.4001 27.8551 17.0939 27.0725 17.0939 26.2564V25.4872M27.7976 23.9213C26.6313 22.4103 25.8079 21.641 25.8079 17.4752C25.8079 13.6603 23.9676 12.3011 22.453 11.641C22.2518 11.5535 22.0624 11.3526 22.0011 11.1338C21.7354 10.1766 20.9906 9.33334 20.0005 9.33334C19.0105 9.33334 18.2652 10.1771 18.0022 11.1348C17.9409 11.3559 17.7515 11.5535 17.5503 11.641C16.0339 12.3021 14.1955 13.6564 14.1955 17.4752C14.1932 21.641 13.3698 22.4103 12.2035 23.9213C11.7203 24.5473 12.1436 25.4872 12.9888 25.4872H27.0169C27.8575 25.4872 28.2781 24.5444 27.7976 23.9213Z"
                stroke="#8D8D8D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </IconButton>
          <Avatar
            alt="User Avatar"
            src={"./avatar.png"}
            onClick={handleClick}
            style={{
              cursor: "pointer",
              border: "1px solid #737373",
            }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginTop: "10px" }}
          >
            <MenuItem onClick={handleClose}>Profile </MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
