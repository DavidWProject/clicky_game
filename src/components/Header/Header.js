import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h2>
      How to Play: Click on an Image to start, but don't click on the same image twice!
    </h2>
  <h1>
        <a href="/" style={{ textDecoration: 'none' }}>Click here to reset the game and top scores</a>
  </h1>
  </header>
);

export default Header;
