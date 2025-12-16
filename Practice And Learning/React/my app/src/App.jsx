import "./App.css";
import BMI from "./components/BMI";
import Calender from "./components/Calender";
import Converter from "./components/Coverter";
import DigitalClock from "./components/DigitalClock";
import PasswordGenerator from "./components/PasswordGenerator";
import Practice from "./components/Practice";
import Qrcode from "./components/Qrcode";
import QuizApp from "./components/QuizApp";
import QuoteRandom from "./components/QuoteRandom";
import TableUserDetails from "./components/TableUserDetails";
import UserDetails from "./components/userDetails";
import WeatherApp from "./components/WeatherApp";

function App() {
  const arr1 = [
    { id: 1, name: "eif" }, // id is number
    { id: 2, name: "efe" }, // id is number
  ];

  return (
    <>
      <QuizApp />
      {/* <Calender /> */}
      {/* <PasswordGenerator /> */}
      {/* <DigitalClock /> */}
      {/* <BMI /> */}
      {/* <Converter /> */}
      {/* <WeatherApp /> */}
      {/* <QuoteRandom /> */}
      {/* <TableUserDetails /> */}
      {/* <UserDetails /> */}
      {/* <Qrcode /> */}
      {/* <Practice list={arr1} /> */}
    </>
  );
}

export default App;
