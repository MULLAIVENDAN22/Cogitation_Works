import React, { useReducer, useState } from "react";
import { use } from "react";
// import { ToggleReducerFunction } from "../reducer/ToggleReducer";
import "../styles/herosection.css";

export const HeroSection = () => {
  const generateTimes = () => {
    const times = [];

    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h % 12 === 0 ? 12 : h % 12;
        const minute = m.toString().padStart(2, "0");
        const ampm = h < 12 ? "AM" : "PM";
        times.push(`${hour}:${minute} ${ampm}`);
      }
    }

    return times;
  };

  const [selectedTime, setSelectedTime] = useState("Select Time");
  const times = generateTimes();

  const [toggleHandle, setToggle] = useState("oneway");

  const [pick, setPick] = useState("");

  function oneway() {
    return (
      <>
        <div>
          <label htmlFor="from-oneWay" className="form-label fw-semibold">
            From
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="from-oneWay"
            placeholder="Enter Pickup Location"
          />
        </div>

        <div>
          <label htmlFor="to-oneWay" className="form-label fw-semibold">
            To
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="to-oneWay"
            placeholder="Enter Drop Location"
          />
        </div>

        <div>
          <label htmlFor="pickupDate-oneWay" className="form-label fw-semibold">
            Pickup Date
          </label>
          <input
            type="date"
            className="form-control greeninp fs-6"
            id="pickupDate-oneWay"
            placeholder="Enter Drop Location"
          />
        </div>

        <div>
          <label className="form-label fw-semibold">Pickup Time</label>

          <div className="dropdown" style={{ width: "300px" }}>
            <button
              className="form-control text-start"
              data-bs-toggle="dropdown"
            >
              {selectedTime}
            </button>

            <ul
              className="dropdown-menu"
              style={{ height: "400px", overflowY: "auto", width: "100%" }}
            >
              {times.map((time) => (
                <li key={time}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }

  function roundtrip() {
    return (
      <>
        <div className="" style={{ minWidth: "17%" }}>
          <label htmlFor="from-RoundTrip" className="form-label fw-semibold">
            From
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="from-RoundTrip"
            placeholder="Enter Pickup Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label htmlFor="to-RoundTrip" className="form-label fw-semibold">
            To
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="to-RoundTrip"
            placeholder="Enter Drop Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label
            htmlFor="pickupDate-RoundTrip"
            className="form-label fw-semibold"
          >
            Pickup Date
          </label>
          <input
            type="date"
            className="form-control greeninp fs-6"
            id="pickupDate-RoundTrip"
            placeholder="Enter Drop Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label className="form-label fw-semibold">Pickup Time</label>

          <div className="dropdown" style={{ width: "300px" }}>
            <button
              className="form-control text-start"
              data-bs-toggle="dropdown"
            >
              {selectedTime}
            </button>

            <ul
              className="dropdown-menu"
              style={{ height: "400px", overflowY: "auto", width: "100%" }}
            >
              {times.map((time) => (
                <li key={time}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
  function local() {
    return (
      <>
        <div
          className="d-flex flex-row justify-content-center"
          style={{ gap: "3%" }}
        >
          <div>
            <label htmlFor="city-Local" className="form-label fw-semibold">
              City
            </label>
            <input
              type="text"
              className="form-control greeninp fs-6"
              id="city-Local"
              placeholder="Enter Drop Location"
            />
          </div>

          <div>
            <label
              htmlFor="pickupDate-Local"
              className="form-label fw-semibold"
            >
              Pickup Date
            </label>
            <input
              type="date"
              className="form-control greeninp fs-6"
              id="pickupDate-Local"
              placeholder="Enter Drop Location"
            />
          </div>

          <div>
            <label className="form-label fw-semibold">Pickup Time</label>

            <div className="dropdown" style={{ width: "300px" }}>
              <button
                className="form-control text-start"
                data-bs-toggle="dropdown"
              >
                {selectedTime}
              </button>

              <ul
                className="dropdown-menu"
                style={{ height: "400px", overflowY: "auto", width: "100%" }}
              >
                {times.map((time) => (
                  <li key={time}>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  function airport() {
    return (
      <>
        <div className="" style={{ minWidth: "17%" }}>
          <label htmlFor="from-Airport" className="form-label fw-semibold">
            Pickup Address
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="from-Airport"
            placeholder="Enter Pickup Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label htmlFor="to-Airport" className="form-label fw-semibold">
            Drop Address
          </label>
          <input
            type="text"
            className="form-control greeninp fs-6"
            id="to-Airport"
            placeholder="Enter Drop Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label htmlFor="pickupDate-oneWay" className="form-label fw-semibold">
            Pickup Date
          </label>
          <input
            type="date"
            className="form-control greeninp fs-6"
            id="pickupDate-oneWay-oneWay"
            placeholder="Enter Drop Location"
          />
        </div>

        <div className="" style={{ minWidth: "17%" }}>
          <label className="form-label fw-semibold">Pickup Time</label>

          <div className="dropdown" style={{ width: "300px" }}>
            <button
              className="form-control text-start"
              data-bs-toggle="dropdown"
            >
              {selectedTime}
            </button>

            <ul
              className="dropdown-menu"
              style={{ height: "400px", overflowY: "auto", width: "100%" }}
            >
              {times.map((time) => (
                <li key={time}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      className="container-fluid overflow-hidden mt-1"
      style={{ maxHeight: "480px" }}
    >
      <div
        className="row px-2 overflow-hidden"
        style={{ backgroundColor: "#e6ebefa6", borderRadius: "10px" }}
      >
        <div className="col-9">
          <div className="container ps-5 py-3">
            <h6 className="fw-semibold" style={{ color: "rgb(3, 143, 3)" }}>
              Save up to 70% on car rentals
            </h6>

            <h5 className="fw-medium my-3">Clear prices, no surprises</h5>

            <h2 className="fw-bold mt-4" style={{ color: "rgb(50, 50, 50)" }}>
              Compare rental cars Deals from 100s of sites.
            </h2>

            <div className="d-flex flex-row py-3" style={{ marginLeft: "25%" }}>
              {/* Self Drive */}
              <div
                className={`d-flex flex-column align-items-center justify-content-center bbtn `}
                style={{ marginRight: "16%" }}
                onClick={() => {
                  setPick("self");
                }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "60px",
                    width: "60px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    borderRadius: "10px",
                    background: pick == "self" ? "#349b3cff" : "",
                  }}
                >
                  <svg
                    fill={`${pick == "self" ? "#ffffffff" : "#000000"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width={37}
                    height={37}
                    viewBox="0 0 569.068 569.068"
                  >
                    <path d="M560.149,346.928v-75.854c0-16.687-7.888-41.028-44.288-64.385c0,0-48.07-104.724-133.616-104.724h-195.41 c-85.544,0-133.618,104.724-133.618,104.724c-36.403,23.357-44.289,47.698-44.289,64.385v75.854C3.957,347.2,0,351.315,0,356.358 v48.277c0,4.127,2.668,7.523,6.346,8.812v44.202c0,5.22,4.224,9.454,9.449,9.454h65.079c5.224,0,9.446-4.234,9.446-9.454v-43.759 c26.753-8.84,53.699-15.235,80.249-19.64h227.951c26.547,4.404,53.479,10.8,80.247,19.64v43.759c0,5.22,4.213,9.454,9.438,9.454 h65.085c5.215,0,9.44-4.234,9.44-9.454v-44.202c3.678-1.288,6.338-4.692,6.338-8.812v-48.277 C569.068,351.315,565.113,347.2,560.149,346.928z M142.341,351.211H72.418c-10.539,0-19.123-8.585-19.123-19.109v-19.12 c0-10.538,8.586-19.118,19.123-19.118c1.105,0,2.205,0.188,3.244,0.573l79.482,28.68c3.801,1.372,6.31,4.961,6.31,8.995 C161.454,342.626,152.881,351.211,142.341,351.211z M350.007,346.18c0,4.048-3.281,7.324-7.324,7.324H226.406 c-4.052,0-7.324-3.276-7.324-7.324v-17.093c0-4.05,3.274-7.324,7.324-7.324h116.277c4.056,0,7.324,3.274,7.324,7.324V346.18z M102.966,208.858c19.072-33.251,51.861-75.764,94.847-75.764h173.435c42.984,0,75.788,42.513,94.854,75.764H102.966z M515.785,332.083c0,10.543-8.583,19.126-19.126,19.126h-69.922c-10.545,0-19.123-8.583-19.123-19.126 c0-4.035,2.531-7.625,6.321-9.006l79.477-28.671c1.06-0.387,2.133-0.573,3.247-0.573c10.546,0,19.126,8.582,19.126,19.118V332.083z "></path>
                  </svg>
                </div>
                <p className="fw-medium mt-2" style={{ whiteSpace: "nowrap" }}>
                  Self Drive
                </p>
              </div>

              {/* Driver */}
              <div
                className={`d-flex flex-column align-items-center justify-content-center bbtn `}
                onClick={() => {
                  setPick("driver");
                }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "60px",
                    width: "60px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    borderRadius: "10px",
                    background: pick == "driver" ? "#349b3cff" : "",
                  }}
                >
                  <svg
                    fill={`${pick == "driver" ? "#ffffffff" : "#000000"}`}
                    width={37}
                    height={37}
                    viewBox="0 0 256 240"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M84.635,20.256c18.383,0,33.286,14.903,33.286,33.286s-14.903,33.286-33.286,33.286S51.349,71.925,51.349,53.542S66.251,20.256,84.635,20.256z M31.002,145.011c0-2.499,1.606-4.194,4.194-4.194s4.194,1.606,4.194,4.194v92.986h91.469v-92.986c0-2.499,1.606-4.194,4.194-4.194c2.499,0,4.194,1.606,4.194,4.194v92.986h29.092V136.623c0-22.934-18.74-41.585-41.585-41.585h-8.388l-24.451,38.015l-2.945-28.467l4.016-9.638H76.96l4.016,9.638l-3.123,28.645L53.401,95.038h-9.816C20.651,95.038,2,113.778,2,136.623v101.375h29.092v-92.986H31.002z M179.254,72.482v8.546c0,4.778-3.488,8.546-7.724,8.546c-4.236,0-7.724-3.768-7.724-8.546v-8.546H156V44.547c0-6.157,3.737-11.211,8.803-12.773l9.053-23.8C175.185,4.481,178.258,2,181.912,2h46.259c3.654,0,6.727,2.481,8.056,5.973l8.969,23.8C250.263,33.336,254,38.39,254,44.547v27.936h-7.89v8.546c0,4.778-3.488,8.546-7.724,8.546c-4.319,0-7.724-3.768-7.724-8.546v-8.546H179.254z M172.029,57.136c4.319,0,7.807-3.86,7.807-8.638c0-4.778-3.488-8.638-7.807-8.638c-4.319,0-7.807,3.86-7.807,8.638S167.71,57.136,172.029,57.136 M245.28,48.498c0-4.778-3.488-8.638-7.807-8.638s-7.807,3.86-7.807,8.638s3.488,8.638,7.807,8.638S245.28,53.277,245.28,48.498 M237.473,31.314l-7.724-20.584c-0.332-1.011-1.246-1.746-2.325-1.746h-44.847c-0.997,0-1.91,0.735-2.242,1.746l-7.724,20.584L237.473,31.314z" />
                  </svg>
                </div>
                <p className="fw-medium mt-2" style={{ whiteSpace: "nowrap" }}>
                  Driver
                </p>
              </div>
            </div>

            {/* Trip Type */}
            <div className="display-menu">
              <div
                className="btn-group"
                role="group"
                aria-label="Dark radio toggle button group"
                style={{ width: "87%" }}
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="oneWayClick"
                  autoComplete="off"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-dark custom-toggle fw-semibold"
                  htmlFor="oneWayClick"
                  onClick={() => {
                    setToggle("oneway");
                  }}
                >
                  One Way
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="RoundTripClick"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-dark custom-toggle fw-semibold"
                  htmlFor="RoundTripClick"
                  onClick={() => {
                    setToggle("roundtrip");
                  }}
                >
                  Round Trip
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="LocalClick"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-dark custom-toggle fw-semibold"
                  htmlFor="LocalClick"
                  onClick={() => {
                    setToggle("local");
                  }}
                >
                  Local
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="AirPortClick"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-dark custom-toggle fw-semibold"
                  htmlFor="AirPortClick"
                  onClick={() => {
                    setToggle("airport");
                  }}
                >
                  AirPort
                </label>
              </div>
            </div>

            {/* Inputs */}
            <div
              className="d-flex flex-row justify-content-center mt-4 diplay-items"
              style={{ gap: "2%" }}
            >
              {toggleHandle == "oneway" && oneway()}
              {toggleHandle == "roundtrip" && roundtrip()}
              {toggleHandle == "local" && local()}
              {toggleHandle == "airport" && airport()}
            </div>
            <div className="mt-3 suv">
              <div className="greeninp ms-auto" style={{ width: "100px" }}>
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id="checkDefault"
                />
                <label
                  className="form-check-label fs-6 fw-semibold"
                  htmlFor="checkDefault"
                >
                  SUV
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-3 overflow-hidden">
          <div className="overflow-hidden">
            <div className=" overflow-hidden me-5" style={{ width: "200px" }}>
              <div
                className="floating-img"
                style={{ transform: "translate(0,-90px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{ objectPosition: " -20px 30px" }}
                />
              </div>
              <div
                className="floating-img"
                style={{ transform: "translate(0,-70px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{ objectPosition: " 0px -100px" }}
                />
              </div>
              <div
                className="floating-img"
                style={{ transform: "translate(0,-50px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{ objectPosition: " -60px -30px" }}
                />
              </div>
            </div>
            <div
              className=" overflow-hidden "
              style={{ transform: "translate(220px,-640px)" }}
            >
              <div
                className="floating-img"
                style={{ transform: "translate(0,-90px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{ objectPosition: " -30px -20px" }}
                />
              </div>
              <div
                className="floating-img"
                style={{ transform: "translate(0,-70px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{ objectPosition: " -50px 0px" }}
                />
              </div>
              <div
                className="floating-img"
                style={{ transform: "translate(0,-50px)" }}
              >
                <img
                  src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
