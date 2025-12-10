import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Qrcode = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(20);
  const [qrdata, setqrdata] = useState(null);
  const [qrsize, setqrsize] = useState(null);

  function handleqr() {
    setqrdata(text);
    setqrsize(size);
  }

  function downloadQr() {
    // Find the canvas element rendered by QRCodeCanvas
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // Convert canvas to a data URL (PNG image)
    const url = canvas.toDataURL("image/png");

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png"; // filename
    link.click();
  }

  return (
    <>
      <div className="qrcode">
        <h1 className="fw-bold mt-3">QR Code Generator</h1>
        <div className="d-flex align-items-center justify-content-center p-3 codeImg">
          {text && size ? (
            <QRCodeCanvas value={qrdata} size={qrsize} />
          ) : (
            <p className="text-danger">Please fill the form</p>
          )}
        </div>
        <div className="mt-4">
          <label className="fw-semibold" htmlFor="#data">
            Data for QRcode
          </label>
          <input
            className="form-control m-3"
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            id="data"
            placeholder="Enter the data for QR code"
          />
        </div>
        <div className="mt-4">
          <label className="fw-semibold" htmlFor="#data">
            Image Size ("for eg: 150")
          </label>
          <input
            className="form-control m-3"
            onChange={(e) => {
              setSize(e.target.value);
            }}
            type="text"
            id="data"
            placeholder="Enter the Size"
          />
        </div>
        <div
          className="d-flex flex-row justify-content-center mt-4"
          style={{ gap: "5%" }}
        >
          <button
            type="button"
            className="btn btn-primary fw-semibold"
            onClick={() => {
              handleqr();
            }}
            style={{ width: "35%", height: "45px" }}
          >
            Generate
          </button>
          <button
            type="button"
            className="btn btn-success fw-semibold"
             onClick={() => {
              downloadQr();
            }}
            style={{ width: "35%", height: "45px" }}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Qrcode;
