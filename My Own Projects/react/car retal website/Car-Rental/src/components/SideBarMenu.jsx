import React from "react";
import "../styles/sidebar.css";
import { UseSideBar } from "../context/SideBarToggle";
export const SideBarMenu = () => {
  const { hamburger, setHamburger } = UseSideBar();
  console.log(hamburger);

  return (
    <div
      className={`row position-fixed g-0 `}
      style={{
        height: "90vh",
        width: "100%",
        zIndex: `${hamburger ? 5 : -1}`,
      }}
    >
      <div
        className={`col-3 bg-light sidebar overflow-hidden pt-3 px-1 `}
        style={{
          width: `${hamburger ? 25 : 0}%`,
          transition: hamburger ? "width 0.4s ease-in-out" : "",
        }}
      >
        <div className="bg-light">
          <ul className="list-group">
            <li className="list-group-item pointer dullhover">Become a Host</li>
            <hr />
            <li className="list-group-item pointer dullhover">
              Investor Relation
            </li>
            <li className="list-group-item pointer dullhover">Press Release</li>
            <hr />
            <li className="list-group-item pointer dullhover">Car Rent</li>
            <li className="list-group-item pointer dullhover">Subscriptions</li>
            <hr />
            <li className="list-group-item pointer dullhover">
              Mv cars Rental Policies pointer
            </li>
            <li className="list-group-item pointer dullhover">
              Help & Support
            </li>
            <li className="list-group-item pointer dullhover">Blog</li>
          </ul>
        </div>
      </div>

      <div
        className={`col-9 ${hamburger ? "" : "d-none"}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.406)",
          color: "transparent",
        }}
        onClick={() => setHamburger((pre) => !pre)}
      ></div>
    </div>
  );
};
