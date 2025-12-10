import "./App.css";
import Converter from "./components/Coverter";
import Practice from "./components/Practice";
import Qrcode from "./components/Qrcode";
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
      <Converter />
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
