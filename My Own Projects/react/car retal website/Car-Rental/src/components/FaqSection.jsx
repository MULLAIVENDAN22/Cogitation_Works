import React, { useState } from "react";
import "../styles/faqsection.css";

const carRentalFAQs = [
  {
    question: "What documents are required to rent a car?",
    answer:
      "You need a valid driving license and a government-issued ID. International users may require a passport and visa.",
  },
  {
    question: "Is there a minimum age to rent a car?",
    answer:
      "Yes, the minimum age is usually 21 years. Some premium or sports cars may require a higher age limit.",
  },
  {
    question: "Are fuel charges included in the rental price?",
    answer:
      "Fuel charges are not included unless mentioned. The car should be returned with the same fuel level as pickup.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, bookings can be modified or cancelled before pickup time. Cancellation charges may apply as per policy.",
  },
  {
    question: "What happens if I return the car late?",
    answer:
      "Late returns may attract additional charges. Grace periods vary depending on the booking type.",
  },
  {
    question: "Is insurance included with the rental?",
    answer:
      "Basic insurance is included in all rentals. Additional coverage can be purchased for extra protection.",
  },
  {
    question: "What should I do in case of a breakdown or accident?",
    answer:
      "Contact our 24/7 support immediately. Roadside assistance and guidance will be provided.",
  },
];

const hostFAQs = [
  {
    question: "Who can become a car host?",
    answer:
      "Anyone who owns a car with valid documents can become a host. The car must meet our quality standards.",
  },
  {
    question: "Is my car insured while renting?",
    answer:
      "Yes, your car is covered under rental insurance during active bookings to protect against damages.",
  },
  {
    question: "Who is responsible for car maintenance?",
    answer:
      "Hosts are responsible for regular maintenance. We recommend keeping the car in excellent condition.",
  },
  {
    question: "Can I block dates when my car is unavailable?",
    answer:
      "Yes, hosts can block dates anytime using the dashboard to manage availability easily.",
  },
  {
    question: "What happens if a renter damages my car?",
    answer:
      "Damage costs are handled through insurance and security deposits as per our host protection policy.",
  },
  {
    question: "Can I set my own rental price?",
    answer:
      "Yes, hosts can set or adjust prices based on demand, weekends, or special occasions.",
  },
];

const totalFAQs = [...carRentalFAQs, ...hostFAQs];
const FaqSection = () => {
  const [cardheight, setCardheight] = useState({
    index: 0,
    height: false,
  });
  return (
    <div className="px-5 mb-5">
      <div className="container">
        <div
          className="faqsection-main-h1 d-flex justify-content-center align-items-center"
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
            Planning Your Car Rental? Check Our FAQs
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
        <div className="row g-4 mt-3">
          {totalFAQs.map((val, index) => (
            <div className="col-6" key={index}>
              <div className="faqsection-cards">
                <div
                  className="px-2  d-flex flex-row justify-content-between"
                  style={{
                    borderBottom: cardheight
                      ? "1.5px solid rgb(126, 126, 126)"
                      : "",
                  }}
                  onClick={() => {
                    setCardheight((pre) => ({
                      height: !pre.height,
                      index: index,
                    }));
                  }}
                >
                  <h6 className="fw-medium pt-3 pb-2">{val.question}</h6>
                  <span className="fw-semibold fs-5 pt-2">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div
                  className="faqsection-cards-content"
                  style={{
                    height:
                      cardheight.height && cardheight.index == index
                        ? ""
                        : "0px",
                  }}
                >
                  <p className="px-3 pt-3">{val.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
