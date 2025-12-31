import React from "react";
import "../styles/traveldeal.css";

const cards = [
  {
    city: "Salem",
    p1: "1hr 15min, direct",
    p2: "Mon 19/1 - Mon-12/1",
    price: "from ₹ 6,539",
    img: "https://media.gettyimages.com/id/170409681/video/aerial-state-capitol-building-in-downtown-salem-oregon-united-states.avif?s=640x640&k=20&c=fInJOgJhhRZb6KOXPrpdQ8r1T1lV2lW5AXD1aDhp6HM=",
  },
  {
    city: "Bengaluru",
    p1: "1hr 10min, direct",
    p2: "Mon 19/1 - Mon-26/1",
    price: "from ₹ 6,808",
    img: "https://media.gettyimages.com/id/1319820234/video/bangalore-cityscape-aerial-view.avif?s=640x640&k=20&c=k9vVayLgCKa9o85buGUactMK0QZATkr_c8sZN17jw1s=",
  },
  {
    city: "Chennai",
    p1: "1hr 30min, direct",
    p2: "Mon 19/1 - Mon-12/1",
    price: "from ₹ 7,497",
    img: "https://media.gettyimages.com/id/2205575963/video/static-drone-shot-of-basni-cityscape-in-jodhpur-india.avif?s=640x640&k=20&c=AQfbSc-FeA19ndWAy_yg6mJH74VXWHrZ7ynm6hWUnh0=",
  },
  {
    city: "Vellore",
    p1: "1hr 35min, direct",
    p2: "Fri 16/1 - Fri-23/1",
    price: "from ₹ 6,975",
    img: "https://media.gettyimages.com/id/2201757737/video/aerial-shot-of-subway-track-in-gurukul-ahmedabad-on-smoggy-day.avif?s=640x640&k=20&c=PDOHc3OksW6MWXDf4l2oJ7GSziOOfgosQ_swGdS1JwE=",
  },
];
const TravelDeals = () => {
  return (
    <div className="travel-deal py-5" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="">
          <div className="d-flex justify-content-between my-3">
            <h2 className="fw-bold">Travel deals under ₹ 8,152</h2>
            <p
              className="fw-semibold align-self-end mt-3 pointer"
              style={{ color: "#555555ff" }}
            >
              Explore More {"  >"}
            </p>
          </div>
          <div className="row g-3">
            {cards.map((value, index) => (
              <div key={index} className="col-3">
                <div className="cards py-3 px-2 pointer">
                  <div>
                    <img
                      className="img-fluid"
                      width={"100%"}
                      height={"auto"}
                      src={value.img}
                      alt=""
                      
                    />
                  </div>
                  <div className="px-3">
                    <h4 className="fw-bold mt-3">{value.city}</h4>
                    <p className="p-0 m-0">{value.p1}</p>
                    <p className="p-0 m-0">{value.p2}</p>
                    <h5 className="fw-bold py-2">{value.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDeals;
