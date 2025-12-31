import React from "react";
import "../styles/header.css";
import { UseSideBar } from "../context/SideBarToggle";

export const Header = () => {
  const { setHamburger } = UseSideBar();
  // console.log(hamburger);

  return (
    <header
      className="px-2 position-sticky top-0"
      style={{ backgroundColor: "white", zIndex: 10 }}
    >
      <nav className="navbar navbar-light d-flex flex-row justify-content-between align-items-center py-2">
        <div className="d-flex flex-row align-items-center">
          <div
            className="p-3 dullhover pointer"
            style={{ borderRadius: "10px" }}
            onClick={() => setHamburger((pre) => !pre)}
          >
            <img
              className="image-fluid"
              src="/images/nav/hamburger.png"
              alt="Menu"
              height="30"
              width="auto"
            />
          </div>
          <a className="navbar-brand p-0 m-0 pointer">
            <img
              className="image-fluid"
              src="/images/logos/_173a3e6e-1c80-4a96-84a2-5c21eb1b15b7-removebg-preview.png"
              alt="Logo"
              height="60"
              width="auto"
            />
          </a>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center">
          <div
            className="me-3 dullhover pointer"
            style={{
              display: "grid",
              placeItems: "center",
              height: "42px",
              width: "42px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "50%",
            }}
          >
            <i className="fa-solid fa-heart" style={{ fontSize: "22px" }}></i>
          </div>
          <button
            type="button"
            className="btn fw-semibold dullhover pointer"
            style={{ border: "2px solid black" }}
          >
            <i className="fa-solid fa-user fs-6 me-1"></i>
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};
