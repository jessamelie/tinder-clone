import React from "react";
import "../style/Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="profilIcon" fontSize="large" />
      </IconButton>
      <img
        className="tinderLogo"
        src="src/assets/tinder.png"
        alt="tinderLogo"
      ></img>
      <IconButton>
        <ForumIcon className="messageIcon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
