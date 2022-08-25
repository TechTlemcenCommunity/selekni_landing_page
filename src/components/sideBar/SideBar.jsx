import React from "react";
import { useState } from "react";
import { Sidebar } from "./sideBar.styled";
import homeIcon from "../../assets/home.svg";
import advantafesIcon from "../../assets/advantages.svg";
import feedBackIcon from "../../assets/feedback.svg";

function SideBar(props) {
  return (
    <Sidebar className={`${props.open ? "show-sidebar" : ""}`}>
      <aside className={`${props.open ? "sidebar show-sidebar" : "sidebar"}`}>
        {/* <div className="sidebar-header">
                <Link to="/" className="logo__link">
                    <img className='logo__image' src={logo} alt="logo" />
                </Link>
            </div> */}
        <ul className="sidebar-links">
          <li className="sidebar-link ">
            <a
              href="#accueil"
              tabIndex={props.menuOpen ? 0 : -1}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={homeIcon} /> <span>Accueil</span>
            </a>
          </li>
          <li className="sidebar-link">
            <a
              href="#advantages"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={advantafesIcon} /> <span>Les avantages</span>
            </a>
          </li>
          <li className="sidebar-link">
            <a
              href="#temoignages"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={feedBackIcon} /> <span>Témoignages</span>
            </a>
          </li>
        </ul>
      </aside>
    </Sidebar>
  );
}

export default SideBar;
