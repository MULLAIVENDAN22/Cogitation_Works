import React, { useEffect } from "react";
// import "../custom css/Calender.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { useState } from "react";

const Calender = () => {
  const date = new Date();
  //   console.log(dateeee.getDay(), dateeee.getMonth());


  // not belong to this code
  // const color = ["red", "blue", "green", "red", "blue", "yellow"];
  // const reduced = color.reduce((acc, cur) => {
  //       // if (acc[cur]) {
  //   if (cur in acc) {
  //     acc[cur] += 1;
  //   } else {
  //     acc[cur] = 1;
  //   }
  //   return acc;
  // }, {});

  // console.log(reduced);
  

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const monthsMap = {
  //   January: 0,
  //   February: 1,
  //   March: 2,
  //   April: 3,
  //   May: 4,
  //   June: 5,
  //   July: 6,
  //   August: 7,
  //   September: 8,
  //   October: 9,
  //   November: 10,
  //   December: 11,
  // };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [mon_year, setMon_year] = useState({
    month: months[date.getMonth()],
    Year: date.getFullYear(),
  });
  const [change, setChange] = useState(false);

  //   const dateeee = new Date();
  //   console.log(dateeee.getDay(), dateeee.getMonth());

  function WriteYear() {
    let lastYear = date.getFullYear();
    const years = Array.from({ length: lastYear - 1990 + 1 }, (val, ind) => {
      let num = lastYear - ind;
      return (
        <option key={num} value={num}>
          {num}
        </option>
      );
    });

    // while (lastYear >= 1900) {
    //   years.push(
    //
    //   );
    //   lastYear--;
    // }
    return years;
  }
  // let dates = new Date(Number(mon_year.Year), monthsMap[mon_year.month] -1, 1);
  // console.log(Number(mon_year.Year), monthsMap[mon_year.month],dates.getDay());

  function GetCalender() {
    // let dates = new Date(Number(mon_year.Year), monthsMap[mon_year.month], 1);
    let dates = new Date(
      Number(mon_year.Year),
      months.indexOf(mon_year.month),
      1
    );
    console.log(mon_year);

    let blank = Array(dates.getDay()).fill("");
    let nextDates = Array.from(
      {
        length: new Date(
          Number(mon_year.Year),
          months.indexOf(mon_year.month) + 1,
          0
        ).getDate(),
      },
      (val, ind) => ind + 1
    );
    // console.log(lastDate);
    let calender = [...blank, ...nextDates].map((val) => {
      return (
        <div className="box" key={val}>
          {val}
        </div>
      );
    });

    // let calender = [];
    // let num = 1;
    // for (let index = 0; num <= lastDate; index++) {
    //   if (num > lastDate) {
    //     break;
    //   } else if (index >= dates.getDay()) {
    //     calender.push(<div className="box">{num++}</div>);
    //   } else {
    //     calender.push(<div className="box"></div>);
    //   }
    // }
    return calender;
  }

  function goleft() {
    let year = mon_year.Year;
    let mon = months.indexOf(mon_year.month);
    if (year < 1600) {
      return;
    } else if (mon_year.Year <= 1600 && months.indexOf(mon_year.month) == 0) {
      return;
    } else if (months.indexOf(mon_year.month) == 0 && year - 1 >= 1600) {
      setMon_year({ month: months[11], Year: year - 1 });
      return;
    } else {
      setMon_year({ ...mon_year, month: months[mon - 1] });
    }
  }

  function goRight() {
    let year = mon_year.Year;
    let mon = months.indexOf(mon_year.month);

    if (year > Number(date.getFullYear())) {
      return;
    } else if (
      mon_year.Year == date.getFullYear() &&
      months.indexOf(mon_year.month) == date.getMonth()
    ) {
      return;
    } else if (
      months.indexOf(mon_year.month) == 11 &&
      year + 1 <= Number(date.getFullYear())
    ) {
      setMon_year({ month: months[0], Year: year + 1 });
      return;
    } else {
      setMon_year({ ...mon_year, month: months[mon + 1] });
    }
  }

  useEffect(() => {
    setChange(true);
  }, []);

  return (
    <div className="Calender ">
      <div className="header bg-primary text-light pb-3">
        <div
          className="p-4 d-flex flex-row justify-content-around"
          style={{ minHeight: "100px" }}
        >
          <div>
            <button
              className="btn btn-success"
              type="button"
              onClick={goleft}
              style={{
                height: "55px",
                width: "55px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <i className="fa-solid fa-arrow-left fs-4 "></i>
            </button>
          </div>
          <div className="mt-2">
            <select
              className="form-select "
              aria-label="Default select example"
              name="country"
              value={mon_year.month}
              onChange={(e) => {
                setMon_year({ ...mon_year, month: e.target.value });
                setChange(true);
                GetCalender();
              }}
            >
              <option selected disabled>
                Select Month
              </option>
              {months.map((values) => {
                return (
                  <option key={values} value={values}>
                    {values}
                  </option>
                );
              })}
            </select>
          </div>

          <h2 className="fw-bold">Calender</h2>

          <div className="mt-2">
            <select
              className="form-select "
              aria-label="Default select example"
              name="country"
              value={mon_year.Year}
              onChange={(e) => {
                setMon_year({ ...mon_year, Year: Number(e.target.value) });
                setChange(true);
                GetCalender();
              }}
            >
              <option selected disabled>
                Select Year
              </option>
              <WriteYear />
            </select>
          </div>
          <div>
            <button
              className="btn btn-success"
              type="button"
              onClick={goRight}
              style={{
                height: "55px",
                width: "55px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <i className="fa-solid fa-arrow-right fs-4 "></i>
            </button>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-evenly align-itenms-center">
          {days.map((values) => {
            return (
              <h5 key={values} className="fw-semibold">
                {values}
              </h5>
            );
          })}
        </div>
      </div>
      <div
        className="body py-3 ps-5 pe-4 text-light fs-4 fw-bold "
        style={{
          backgroundColor: "#bdd8f3ff",

          overflowY: "scroll",
        }}
      >
        {change && <GetCalender />}
      </div>
    </div>
  );
};

export default Calender;
