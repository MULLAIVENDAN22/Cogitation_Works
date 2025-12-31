import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { SideBarMenu } from "./components/SideBarMenu";
import { HeroSection } from "./components/HeroSection";
import TravelDeals from "./components/TravelDeals";
import TravelFree from "./components/travelfree";
import CarTypes from "./components/CarTypes";
import TopSellingCars from "./components/TopSellingCars";
import FaqSection from "./components/FaqSection";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <SideBarMenu />
      <HeroSection />
      <TravelFree />
      <TravelDeals />
      <CarTypes />
      <TopSellingCars />
      <FaqSection />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
