import React from "react";
function Navbar(){
    return <header className="main-header clearfix" role="header">
    <div className="logo">
      <img src="\images\Alt.png" alt="logo" width="100" height="35"/></div>
    
    <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
    <nav id="menu" className="main-nav" role="navigation">
      <ul className="main-menu">
        <li><a href="#section1">Home</a></li>
        <li className="has-submenu"><a href="#section2">About Us</a>
          <ul className="sub-menu">
            <li><a href="#section2">Who we are?</a></li>
            <li><a href="#section3">Become Member</a></li>
          </ul>
        </li>
        <li><a href="#section5">Programs</a></li>
   
        <li><a href="#section6">Contact</a></li>
   <li><a href="http://blog.pdscorg.com">Blogs</a></li>
      </ul>
    </nav>
  </header>
}
export default Navbar;
