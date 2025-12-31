import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <div className="container">
        <h2 className="fw-bold">Our Happy Customers</h2>
        <div className="row g-4 mt-3 px-lg-1 px-md-1 px-sm-3">
          {/* About Section */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="px-2">
              <p className="fw-semibold" style={{ color: "#616161" }}>
                MV Car Rental is your trusted partner for convenient and
                affordable car rentals. We offer a wide range of well-maintained
                vehicles to suit every travel need, from daily commutes to
                long-distance trips. Our transparent pricing, easy booking
                process, and reliable customer support ensure a stress-free
                experience. Whether you're traveling solo, with family, or for
                business, MV Car Rental makes every journey smooth and
                comfortable.
              </p>

              <div className="d-flex flex-row mt-4" style={{ gap: "3%" }}>
                {["facebook-f", "twitter", "linkedin", "youtube"].map(
                  (icon, index) => (
                    <i
                      key={index}
                      className={`fa-brands fa-${icon} fs-5 text-light`}
                      style={{
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "black",
                        border: "1px solid #a2a2a2",
                        borderRadius: "50%",
                        height: "40px",
                        width: "40px",
                        cursor: "pointer",
                      }}
                    ></i>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <h3 className="fw-semibold">Company</h3>
            <ul className="d-flex flex-column list-unstyled">
              {[
                "Terms & Conditions",
                "FAQ",
                "Privacy Policy",
                "Blogs",
                "Invester Relations",
              ].map((item, i) => (
                <li key={i} className="mt-3 fw-medium bluech">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="px-lg-5 px-md-5 px-sm-3 mt-sm-5 mt-lg-0">
              <h4 className="fw-semibold">Newsletter</h4>

              <p className="mt-4">
                At vero eos et accusamus et iusto odio as part dignissimos
                ducimus qui blandit.
              </p>

              <div className="mt-5 d-flex justify-content-center position-relative">
                <input
                  type="text"
                  className="form-control py-3 ps-3 pe-5 text-light"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "#343434", border: "none" }}
                />

                <button
                  className="btn text-light fs-5 fw-semibold px-2 py-1 position-absolute end-0"
                  style={{
                    backgroundColor: "#264fd4",
                    top: "8px",
                    right: "5px",
                  }}
                >
                  Go
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-5"
            style={{
              height: "3px",
              backgroundColor: "rgba(105, 105, 105, 0.836)",
            }}
          ></div>

          {/* Footer */}
          <div className="row mb-1">
            <div className="col-12">
              <h6
                className="text-center fw-semibold mt-5"
                style={{ color: "#575757" }}
              >
                Copyright © 2024{" "}
                <span style={{ color: "#264fd4" }}>MV Car Rental</span>. All
                rights reserved.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
