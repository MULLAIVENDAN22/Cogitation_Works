import React from "react";
import "../styles/customerReviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carRentalReviews = [
  {
    name: "Arun Kumar",
    review:
      "Booking a car was quick and hassle-free. The vehicle was clean, well-maintained, and delivered on time. Highly recommended for city travel.",
  },
  {
    name: "Priya Sharma",
    review:
      "Great experience overall. The pricing was transparent with no hidden charges, and customer support was very responsive.",
  },
  {
    name: "Rahul Verma",
    review:
      "Smooth pickup and return process. The car performance was excellent, making our trip comfortable and stress-free.",
  },
  {
    name: "Sneha Iyer",
    review:
      "Loved the wide range of cars available. Booking was easy, and the car condition exceeded expectations.",
  },
  {
    name: "Karthik R",
    review:
      "Perfect option for weekend getaways. Affordable prices and reliable service make this my go-to car rental platform.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="px-5" style={{marginTop:"100px"}}>
      <div className="container">
        <h2 className="fw-bold">Our Happy Customers</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
          }}
        >
          {carRentalReviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="customerReviews-cards mx-2 my-5 px-3 py-4"
              >
                <h6 className="fw-semibold py-2">{item.name}</h6>
                <p className="text-muted">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
