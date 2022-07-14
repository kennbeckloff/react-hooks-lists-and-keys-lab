import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // In the NavBar component, there is an array with three strings representing each link on the page. For each of those strings, create an <a> tag that looks like this:
  <a href="#home">home</a>
  <a href="#about">about</a>
  <a href="#projects">projects</a>

  return <nav>{/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
