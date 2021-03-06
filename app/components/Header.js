import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn.js";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("appToken"))
  );

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <a href="/" className="text-white">
            {" "}
            ComplexApp{" "}
          </a>
        </h4>
        {isLoggedIn ? (
          <HeaderLoggedIn setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <HeaderLoggedOut setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </header>
  );
}

export default Header;
