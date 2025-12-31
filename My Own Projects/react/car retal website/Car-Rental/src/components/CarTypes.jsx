import React from "react";
import "../styles/cartypes.css";

const CarTypes = () => {
  return (
    <div
      className=""
      style={{
        margin: "70px 0",
      }}
    >
      <div className="container">
        <div className="row g-5 px-4 cartypesshow">
          <div className="col-12">
            <div
              className="cartypes-main-h1 d-flex justify-content-center align-items-center"
              style={{ gap: "3%" }}
            >
              <div className="">
                <img
                  src="/images/cartypes/image.png"
                  alt=""
                  srcset=""
                  style={{
                    height: "auto",
                    width: "100%",
                    transform: "rotate(180deg)",
                  }}
                />
              </div>
              <h1 className="fw-semibold text-center">
                Perfect Car for Every Journey in India
              </h1>
              <div className="">
                <img
                  src="/images/cartypes/image.png"
                  alt=""
                  srcset=""
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <p
                className="fw-medium grey text-center"
                style={{ width: "60%" }}
              >
                Whether you're traveling with family, heading out for a solo
                trip, or simply looking for a great drive in a premium car,
                Zoomcar offers the best alternatives to car rentals in 30,000+
                options.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="carttypescontent">
              <h5 className="fw-semibold">Sedans</h5>
              <p
                className="fw-medium mt-4"
                style={{
                  color: "#868686ff",
                  fontSize: "15px",
                }}
              >
                Your best car rental-like options, perfect for road trips with
                your family or group outings with ample space and comfort for
                6-7 passengers. Choose from a wide variety when you want to rent
                a car in India.
              </p>
              <button className="btn btn-dark w-100 fw-semibold">
                Rent Seaden In India
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="carttypescontent">
              <h5 className="fw-semibold">Hatchbacks</h5>
              <p
                className="fw-medium mt-4"
                style={{
                  color: "#868686ff",
                  fontSize: "15px",
                }}
              >
                Want to rent a car in India without going broke? Spacious,
                convenient, and economical, Zoomcar hatchbacks are great for
                zipping around the city. They're easy to park, fuel-efficient,
                and perfect for even offroading!
              </p>
              <button className="btn btn-dark w-100 fw-semibold">
                Rent Hatchbacks In India
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="carttypescontent">
              <h5 className="fw-semibold">Electric Cars</h5>
              <p
                className="fw-medium mt-4"
                style={{
                  color: "#868686ff",
                  fontSize: "15px",
                }}
              >
                Go green with electric vehicles! Experience the latest in
                eco-friendly technology while saving on fuel costs. Perfect for
                city commutes and short getaways.
              </p>

              <button className="btn btn-dark w-100 fw-semibold">
                EVS In India
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="carttypescontent">
              <h5 className="fw-semibold">SUVs and Family Cars</h5>
              <p
                className="fw-medium mt-4"
                style={{
                  color: "#868686ff",
                  fontSize: "15px",
                }}
              >
                Your best car rental-like options, perfect for road trips with
                your family or group outings with ample space and comfort for
                6-7 passengers. Choose from a wide variety when you want to rent
                a car in India.
              </p>
              <button className="btn btn-dark w-100 fw-semibold">
                SUVs In India
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTypes;
