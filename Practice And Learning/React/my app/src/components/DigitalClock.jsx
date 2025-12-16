import { useEffect, useState } from "react";
// import "../custom css/DigitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = useState({});

  function CurrentTime() {
    const fdate = new Date();

    setTime({
      time: fdate.toLocaleTimeString(),
      day: fdate.toLocaleDateString("en-US", { weekday: "long" }),
      date: fdate.getDate(),
      month: fdate.toLocaleDateString("en-US", { month: "long" }),
      year: fdate.getFullYear(),
    });
  }

  useEffect(() => {
    CurrentTime();
    const timer = setInterval(CurrentTime,1000);
    return () => clearInterval(timer)
  }, []);

  return (
    <div className="DigitalClock p-5 text-center">
      <h1 className="fw-bold mb-4 ">Digital Clock</h1>
      <div className="text-center w-100">
        <h1 className="m-3 fw-bold dull">{time.time}</h1>
        <h4 className="m-3 text-secondary">
          {time.day}, {time.month} {time.date}, {time.year}
        </h4>
      </div>
    </div>
  );
};

export default DigitalClock;
