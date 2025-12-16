import { useEffect, useState } from "react";
// import "../custom css/WeatherApp.css";
import PropTypes from "prop-types";
// import "../../public/images/weather app"

const iconid = {
  "01d": "sunny",
  "02d": "cloudy",
  "03d": "cloudy",
  "04d": "cloudy",
  "09d": "rainy",
  "10d": "rainy",
  "11d": "rainy",
  "13d": "snow",
  "50d": "snow",
};

function Result({ weather }) {
  // console.log(weather);

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center my-3">
        <img
          src={`/images/weather app/${weather.icon}.png`}
          height="100"
          width="100"
          alt="img not found"
        />
      </div>
      <h4 className="fw-semibold mt-1">{weather.temp} °c</h4>
      <h2 className="fw-bold my-1 text-primary">{weather.city}</h2>
      <h6 className="fw-semibold country">{weather.country}</h6>
      <div
        className="d-flex flex-row justify-content-center align-items-center mt-3 text-center area"
        style={{ gap: "15%" }}
      >
        <div className="">
          <h6 className="fw-medium">latitude</h6>
          <h6 className="fw-bold">{weather.lat}</h6>
        </div>
        <div className="">
          <h6 className="fw-medium">longitude</h6>
          <h6 className="fw-bold">{weather.lon}</h6>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center mt-1 text-center area">
        <div>
          <img
            className="p-2"
            src="/images/weather app/humidity.png"
            height="60"
            width="60"
            alt="img not found"
          />
          <h6 className="fw-medium">Humidity</h6>
          <h6 className="fw-bold">{weather.humidity} %</h6>
        </div>
        <div>
          <img
            className="p-2"
            src="/images/weather app/wind.png"
            height="60"
            width="60"
            alt="img not found"
          />
          <h6 className="fw-medium">Wind Speed</h6>
          <h6 className="fw-bold">{weather.wind} km/h</h6>
        </div>
      </div>
    </div>
  );
}

const WeatherApp = () => {
  const [city, setCity] = useState("chennai");
  const [notFound, setNotFound] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [weather, setWeather] = useState({
    icon: iconid["01d"],
    temp: 23,
    city: city,
    country: "IN",
    lon: 23,
    lat: 45,
    humidity: 34,
    wind: 78,
  });

  useEffect(
    function () {
      GetWeather();
      setClicked(true);
    },
    [city]
  );

  function search(e) {
    if (e.code === "Enter" && e.target.value) {
      GetWeather();
      setClicked(true);
    }
  }

  const GetWeather = async () => {
    // console.log(city, "sss");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad656878b0a4223a68eea3efc99314b9&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setNotFound(true);
        return;
      }

      console.log(data);
      setNotFound(false);
      setWeather({
        icon: iconid[data.weather[0].icon],
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        lon: data.coord.lon,
        lat: data.coord.lat,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (error) {
      setNotFound(true);
    }
  };

  return (
    <div className="weatherApp py-3 px-5" onKeyDown={search}>
      <h2 className="fw-bold text-center my-3">Weather App</h2>
      <div className="d-flex justify-content-center border p-2">
        <input
          type="text"
          className="py-2 px-3 w-100 overflow-hidden"
          value={city}
          placeholder="Enter the Place"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <i
          className="fa-solid fa-magnifying-glass fs-3 ms-3 mt-2"
          onClick={() => {
            GetWeather();
            setClicked(true);
          }}
        ></i>
      </div>
      {clicked && !notFound && <Result weather={weather} />}

      {notFound && <p className="fw-bold text-center my-4">City Not Found</p>}
      <div>
        <h6 className="footer text-center mt-4">
          Designed by <span>Mullaivendan</span>
        </h6>
      </div>
    </div>
  );
};

export default WeatherApp;
