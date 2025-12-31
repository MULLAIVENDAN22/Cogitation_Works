import React from "react";
import "../styles/topsellingcars.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const normalCars = [
  {
    h3: "S-Presso",
    h5: "Maruti Suzuki",
    img: "https://wallpapercave.com/wp/wp8290392.jpg",
    p1: "Hatchback",
    p2: "Manual",
    p3: "4 Seats",
    h4: "₹ 3,200",
    sports: false,
  },
  {
    h3: "Baleno",
    h5: "Maruti Suzuki",
    img: "https://media.zcreators.id/crop/0x0:0x0/x/photo/p2/93/2025/01/19/pilihan-mobil-bagi-keluarga-muda-suzuki-baleno-ideal-penuhi-kebutuhan-1-1704556642.jpg",
    p1: "Hatchback",
    p2: "Manual",
    p3: "5 Seats",
    h4: "₹ 4,100",
    sports: false,
  },
  {
    h3: "Celerio",
    h5: "Maruti Suzuki",
    img: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107441/maruti-suzuki-celerio-right-front-three-quarter6.jpeg?isig=0&wm=0&q=80",
    p1: "Hatchback",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 3,600",
    sports: false,
  },
  {
    h3: "Swift VXI",
    h5: "Maruti Suzuki",
    img: "https://stat.overdrive.in/wp-content/odgallery/2018/01/40157__ANI1352.JPG",
    p1: "Hatchback",
    p2: "Manual",
    p3: "5 Seats",
    h4: "₹ 3,900",
    sports: false,
  },
  {
    h3: "Swift",
    h5: "Maruti Suzuki",
    img: "https://suzukimyanmar.com/storage/SwiftGallery/1680513801D1.webp",
    p1: "Hatchback",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 4,300",
    sports: false,
  },
  {
    h3: "Dzire",
    h5: "Maruti Suzuki",
    img: "https://caronphone.com/news/wp-content/uploads/Maruti-Dzire-becomes-the-The-Best-selling-Sedan-In-March-2025.-thumbnail.webp",
    p1: "Sedan",
    p2: "Manual",
    p3: "5 Seats",
    h4: "₹ 4,500",
    sports: false,
  },
  {
    h3: "Altroz",
    h5: "Tata",
    img: "https://img.autocarindia.com/Galleries/20250522033443_New_Tata_Altroz_Front_Quarter_Static.jpg",
    p1: "Hatchback",
    p2: "Manual",
    p3: "5 Seats",
    h4: "₹ 4,000",
    sports: false,
  },
  {
    h3: "Verna",
    h5: "Hyundai",
    img: "https://tse4.mm.bing.net/th/id/OIP.ddcEHrLWBeL1PTWY3lOCEgHaEK?cb=ucfimg2&ucfimg=1&w=1280&h=720&rs=1&pid=ImgDetMain&o=7&rm=3",
    p1: "Sedan",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 5,500",
    sports: false,
  },
  {
    h3: "Bolero",
    h5: "Mahindra",
    img: "https://www.cartoq.com/wp-content/uploads/2023/01/Mahindra-Bolero-Neo-Limited-Edition-Front-Featured.jpg",
    p1: "SUV",
    p2: "Manual",
    p3: "7 Seats",
    h4: "₹ 5,200",
    sports: false,
  },
  {
    h3: "Ertiga Smart Hybrid",
    h5: "Maruti Suzuki",
    img: "https://imgcdn.zigwheels.ph/large/gallery/exterior/29/3026/suzuki-ertiga-hybrid-front-angle-low-view-890100.jpg",
    p1: "MPV",
    p2: "Manual",
    p3: "7 Seats",
    h4: "₹ 5,800",
    sports: false,
  },
  {
    h3: "Renault Lodgy",
    h5: "Renault",
    img: "https://size-tire.com/wp-content/uploads/2022/12/renault-lodgy-stepway-silver-side-profile-angle-1c-502e_wm-930x620.jpg",
    p1: "MPV",
    p2: "Manual",
    p3: "7 Seats",
    h4: "₹ 6,000",
    sports: false,
  },
  {
    h3: "Triber",
    h5: "Renault",
    img: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/141119/triber-exterior-left-front-three-quarter-4.jpeg?isig=0&q=75",
    p1: "MPV",
    p2: "Manual",
    p3: "7 Seats",
    h4: "₹ 4,900",
    sports: false,
  },
  {
    h3: "Ertiga",
    h5: "Maruti Suzuki",
    img: "https://images.overdrive.in/wp-content/odgallery/2018/11/48722_Maruti_Suzuki_Ertiga_2019_001.JPG",
    p1: "MPV",
    p2: "Automatic",
    p3: "7 Seats",
    h4: "₹ 6,200",
    sports: false,
  },
  {
    h3: "Thar",
    h5: "Mahindra",
    img: "https://tse1.mm.bing.net/th/id/OIP.2GsjBp4cKwwMJCcDAnmjMwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    p1: "SUV",
    p2: "Manual",
    p3: "4 Seats",
    h4: "₹ 7,500",
    sports: false,
  },
];

const sportsCars = [
  {
    h3: "Mustang GT",
    h5: "Ford",
    img: "https://wallpapercave.com/dwp2x/wp4880210.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "4 Seats",
    h4: "₹ 45,000",
    sports: true,
  },
  {
    h3: "911 Carrera",
    h5: "Porsche",
    img: "https://wallpapercave.com/dwp2x/wp11325133.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "4 Seats",
    h4: "₹ 65,000",
    sports: true,
  },
  {
    h3: "AMG C63",
    h5: "Mercedes-Benz",
    img: "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2016/06/f4fd4daaa2a82c026531238d2b93a010/rp-c63-edition-1-29.jpg",
    p1: "Sedan",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 40,000",
    sports: true,
  },
  {
    h3: "M4 Competition",
    h5: "BMW",
    img: "https://www.hdcarwallpapers.com/download/bmw_m4_competition_2021_4k_2-3840x2160.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "4 Seats",
    h4: "₹ 55,000",
    sports: true,
  },
  {
    h3: "R8 V10",
    h5: "Audi",
    img: "https://tse2.mm.bing.net/th/id/OIP.wNrAbK0EtfzbQWiaeqtvywHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    p1: "Sports",
    p2: "Automatic",
    p3: "2 Seats",
    h4: "₹ 75,000",
    sports: true,
  },
  {
    h3: "Huracán EVO",
    h5: "Lamborghini",
    img: "https://www.hdcarwallpapers.com/download/lamborghini_huracan_evo_fluo_capsule_2021_4k_4-3840x2160.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "2 Seats",
    h4: "₹ 1,20,000",
    sports: true,
  },
  {
    h3: "Model 3 Performance",
    h5: "Tesla",
    img: "https://s1.cdn.autoevolution.com/images/news/gallery/2025-tesla-model-3-plaid-tri-motor-aims-to-become-the-fastest-sedan-in-the-virtual-world_9.jpg",
    p1: "Electric",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 35,000",
    sports: true,
  },
  {
    h3: "Ioniq 5 N",
    h5: "Hyundai",
    img: "https://tse4.mm.bing.net/th/id/OIP.7ah5H4LCItI4cZBOqPFWkwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    p1: "Electric",
    p2: "Automatic",
    p3: "5 Seats",
    h4: "₹ 30,000",
    sports: true,
  },
  {
    h3: "Supra MK5",
    h5: "Toyota",
    img: "https://wallpaperaccess.com/full/3290787.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "2 Seats",
    h4: "₹ 50,000",
    sports: true,
  },
  {
    h3: "GT-R",
    h5: "Nissan",
    img: "https://images8.alphacoders.com/102/1029206.jpg",
    p1: "Sports",
    p2: "Automatic",
    p3: "4 Seats",
    h4: "₹ 70,000",
    sports: true,
  },
];

const TopSellingCars = () => {
  return (
    <div
      className=" px-5"
      style={{
        margin: "100px 0",
      }}
    >
      <div className="container">
        <h2 className="fw-bold">Our Top Selling Cars</h2>
        <h4 className="fw-semibold mt-5" style={{ color: "#485256ff" }}>
          Normal Cars
        </h4>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
          }}
        >
          {normalCars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="topsellingcarcards p-3 h-100 mx-2 my-5">
                <h3 className="fw-semibold">{car.h3}</h3>
                <h5 className="fw-semibold">{car.h5}</h5>
                <div className="topsellingcarcard-img my-4">
                  <img className="img-fluid" src={car.img} alt="" />
                </div>
                <div className="d-flex flex-row" style={{ gap: "3%" }}>
                  <div className="d-flex flex-row">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/top-selling-hatchback-icon.svg"
                        alt="https://via.placeholder.com/300x200?text=No+Image"
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p1}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/iconTransmission.svg"
                        alt=""
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p2}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/iconSeat.svg"
                        alt=""
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p3}</p>
                  </div>
                </div>
                <div>
                  <h4 className="fw-semibold">
                    {car.h4} <span className="fw-medium">Per Day</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h4 className="fw-semibold mt-5" style={{ color: "#485256ff" }}>
          Sports Cars
        </h4>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
          }}
        >
          {sportsCars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="topsellingcarcardsp-3 h-100 mx-2 my-5">
                <h3 className="fw-semibold">{car.h3}</h3>
                <h5 className="fw-semibold">{car.h5}</h5>
                <div className="topsellingcarcard-img my-4">
                  <img className="img-fluid" src={car.img} alt="" />
                </div>
                <div className="d-flex flex-row" style={{ gap: "3%" }}>
                  <div className="d-flex flex-row ">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/top-selling-hatchback-icon.svg"
                        alt="https://via.placeholder.com/300x200?text=No+Image"
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p1}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/iconTransmission.svg"
                        alt=""
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p2}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="me-1">
                      <img
                        src="https://www.revv.co.in/assets/RentalImages/PLP/iconSeat.svg"
                        alt=""
                        className="img-fluid topsellingcarcard-icon"
                      />
                    </div>
                    <p className="fw-medium">{car.p3}</p>
                  </div>
                </div>
                <div>
                  <h4 className="fw-semibold">
                    {car.h4} <span className="fw-medium">Per Day</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellingCars;
