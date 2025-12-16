import React, { useState } from "react";
// import "../custom css/PasswordGenerator.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [wrong, setWrong] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [checks, setChecks] = useState({
    UpperCase: false,
    LowerCase: false,
    Number: false,
    symbol: false,
  });

  const names = ["UpperCase", "LowerCase", "Symbol", "Number"];

  function generate() {
    // console.log(length, typeof(length), );
    // console.log(length, typeof(Number(length)), );
    // console.log(length, typeof(parseInt(length)), );
    // setLength(parseInt(length))
    console.log(length, typeof(length) );
    console.log(length <= 0 , !length , Number.isInteger(length))
    
    if (length <= 0 || !length || !Number.isInteger(length)) {
      setWrong(true);
      return;
    }

    let password = "";
    const characters = {
      UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      LowerCase: "abcdefghijklmnopqrstuvwxyz",
      Number: "0123456789",
      Symbol: `"\!@#$%^&*()-_=+[]{};:'",.<>?/|~\"`,
    };

    let allFalse = true;

    names.map((value) => {
      if (checks[value]) {
        allFalse = false;
        password += characters[value];
      }
    });

    if (allFalse) {
      setWrong(true);
      return;
    }

    password = password.split("");

    let finalPassword = "";

    for (let index = 0; index < length; index++) {
      finalPassword += password[Math.floor(Math.random() * password.length)];
    }
    setGeneratedPassword(finalPassword);
    console.log(generatedPassword);
    
    setWrong(false);
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        console.log("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  return (
    <div className="PasswordGenerator py-3 px-5">
      <h1 className="fw-bold text-center p-3">Password Generator</h1>
      <div className="ms-5" style={{ width: "75%" }}>
        <div>
          <label className="fw-medium dull" style={{ fontSize: "16px" }}>
            Enter the length
          </label>
          <input
            type="number"
            min="0"
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
            style={{
              width: "100%",
              padding: "10px 12px",
              margin: "6px 0 14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
        </div>

        {wrong && (
          <div className="my-2">
            <p
              className="fw-semibold p-2 text-center"
              style={{
                color: "#474747ff",
                background: "#f6f6f6",
                borderRadius: "12px",
                fontSize: "15px",
              }}
            >
              {" "}
              Enter the valid Length and tick the checkbox
            </p>
          </div>
        )}
        {names.map((value) => (
          <div key={value} className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              name={value}
              onChange={() => {
                setChecks({ ...checks, [value]: !checks[value] });
              }}
            />
            <label className="form-check-label" htmlFor="checkDefault">
              {value}
            </label>
          </div>
        ))}
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-dark fw-semibold py-2 px-3"
            onClick={generate}
          >
            Generate Password
          </button>
        </div>
        <div className="d-flex flex-row mt-4 mb-3">
          <input
            className="w-100 border px-3 py-1"
            type="text"
            value={generatedPassword}
           
          />
          <button
            className="btn btn-primary fw-semibold ms-1"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
