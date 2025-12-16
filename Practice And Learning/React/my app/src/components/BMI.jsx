import { useState } from "react";
// import "../custom css/BMI.css";

const BMI = () => {
  const [bmi, setBmi] = useState({ bmi: 0, status: "" });
  const [input, setInput] = useState({ height: "", weight: "" });
  const [check, setCheck] = useState(false);
  const [clicked, setClicked] = useState(false);

  function getInputs(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function action() {
    console.log(
      Number.isInteger(parseInt(input.height)),
      Number.isInteger(parseInt(input.weight))
    );

    if (
      !input.height ||
      !input.weight ||
      !Number.isInteger(parseInt(input.height)) ||
      !Number.isInteger(parseInt(input.weight))
    ) {
      setCheck(true);
      setClicked(false);
      return;
    }
    setCheck(false);
    const height = Math.abs(Math.pow(Number(input.height) / 100, 2));
    const weight = Number(input.weight);
    const calculatedBmi = Math.abs(weight / height).toFixed(2);
    const result =
      calculatedBmi <= 18.5
        ? "underweight"
        : calculatedBmi < 25
        ? "Normal weight"
        : calculatedBmi < 30
        ? "Overweight"
        : "Obese";
    setBmi({ bmi: calculatedBmi, status: result });
    setClicked(true);
  }

  return (
    <div className="bmi py-4 px-5">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-item-center">
          
          <img className="mt-auto mb-3"  style={{height:"400px"}}
            src="https://indiannutritionist.com/wp-content/uploads/2024/04/Customised-Diet-Plans-300x300.png"
            alt=""
          />
        </div>
        <div className="col-6">
          <h1 className="head text-center fw-bold p-3">BMI Calculator</h1>
          {check && (
            <p className="text-center text-danger fw-semibold mb-3">
              Please Enter the height and the weight or enter in numbers
            </p>
          )}

          <div className="">
            <label
              htmlFor="height"
              className="fs-6 text-secondary fw-medium py-1"
            >
              Height (cm):
            </label>
            <input
              className="border w-100 py-2 px-4 fs-6 fw-medium"
              type="text"
              name="height"
              id="height"
              onChange={getInputs}
              value={input.height}
            />
          </div>
          <div className=" mt-3">
            <label
              htmlFor="weight"
              className="fs-6 text-secondary fw-medium py-1"
            >
              weight (kg):
            </label>
            <input
              className="border w-100 py-2 px-4 fs-6 fw-medium"
              type="text"
              name="weight"
              id="weight"
              onChange={getInputs}
              value={input.weight}
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary fw-semibold me-4"
              onClick={action}
              style={{ width: "150px", height: "45px" }}
            >
              Calculate BMI
            </button>
            <button
              type="button"
              className="btn btn-danger fw-semibold"
              onClick={() => {
                setInput({ height: "", weight: "" });
                setClicked(false);
                setCheck(false);
              }}
              style={{ width: "150px", height: "45px" }}
            >
              Clear
            </button>
          </div>
          {clicked && (
            <div className="my-5 result p-3 text-center">
              <h5 className="fw-semibold">Your BMI is : {bmi.bmi}</h5>
              <h6 className="text-secondary fw-semibold">
                Status: {bmi.status}
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMI;
