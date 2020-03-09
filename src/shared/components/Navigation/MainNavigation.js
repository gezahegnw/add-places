import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from '../UIElements/BackDrop';
import "./MainNavigation.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  //this methods will allow to open the sidedrawer or humburger button
  const openSideDrawerHandler = () => {
      setDrawerIsOpen(true);
  }
  //this method will allow you click on window and side drawer will close
  const closeSideDrawerHandler = () => {
      setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
        {drawerIsOpen ? <BackDrop onClick={closeSideDrawerHandler} /> : null}
      
        <SideDrawer show={drawerIsOpen} onClick={closeSideDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openSideDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
