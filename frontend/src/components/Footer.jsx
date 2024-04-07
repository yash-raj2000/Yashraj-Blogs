import React from "react";

function Footer() {
  let currenYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <span style={{ fontSize: "20px", marginBottom: "5px" }}>&#169; </span>
        COPYRIGHT {currenYear}- Yashraj Singh
      </footer>
    </>
  );
}

export default Footer;
