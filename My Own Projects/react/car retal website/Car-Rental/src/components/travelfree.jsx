import React from "react";
import "../styles/travelfree.css";
const TravelFree = () => {
  return (
    <div className="container my-5 px-4">
      <div className="row g-4">
        <div className="col-4">
          <div
            className="travelfreecard tfcard1"
            style={{
              borderRadius: "10px",
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2024/07/14/00/34/great-wall-motor-8893216_1280.jpg')",
              backgroundSize: "110%",
              backgroundPosition: "-30px,-30px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="fw-semibold text-center pt-4 ">
              Book Now <span>At Zero Cost</span>
            </h3>
          </div>
        </div>
        <div className="col-4">
          <div
            className="travelfreecard tfcard2"
            style={{
              borderRadius: "10px",
              backgroundImage:
                "url('https://wallpapercrafter.com/desktop/104602-car-city-long-exposure-night-street-vehicle.jpg')",
              backgroundSize: "100%",
              // backgroundPosition: "-30px,-30px",
              // backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="fw-semibold text-center pt-4 ">
              Book Up To 1hr <span>Before Your Trip Starts</span>
            </h3>
          </div>
        </div>
        <div className="col-4">
          <div
            className="travelfreecard tfcard3"
            style={{
              borderRadius: "10px",
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2018/10/29/00/50/jeep-3780273_1280.jpg')",
              backgroundSize: "100%",
              // backgroundPosition: "-30px,-30px",
              // backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="fw-semibold text-center pt-4 ">
              Free Cancellation <span>1 Hour Before Your Trip</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFree;
