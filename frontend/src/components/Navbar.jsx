import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

function Navbar() {
  return (
    <>
      <nav>
        <div className="left">
          <img src={require("../Images/logo.png")} alt="Website Logo" />
        </div>

        <div className="right">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="https://yashrajsinghwebverse.netlify.app/">PORTFOLIO</a>
            </li>
            <li>
              <EmailOutlinedIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <XIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
