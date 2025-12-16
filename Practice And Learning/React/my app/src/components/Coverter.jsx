import React, { useState, useEffect } from "react";

const topCurrencies = [
  "USD", // US Dollar
  "EUR", // Euro
  "JPY", // Japanese Yen
  "GBP", // British Pound
  "AUD", // Australian Dollar
  "CAD", // Canadian Dollar
  "CHF", // Swiss Franc
  "CNY", // Chinese Yuan
  "HKD", // Hong Kong Dollar
  "NZD", // New Zealand Dollar,
  "INR",
];


export default function Converter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState(false);

  function changes(e) {
    setAmount(e.target.value);
    
  }

  async function convertAmount() {
    if (amount <= 0 || !amount) {
      setError(true);
      return;
    }
    const response = await fetch(`https://v6.exchangerate-api.com/v6/ad1a74dba5c64932a61e6006/latest/${fromCurrency}`)
    const data = await response.json()
    setConvertedAmount((amount * data?.conversion_rates[toCurrency]).toFixed(2));
    console.log(convertedAmount)
    
    setError(false);
  }

  function switchCurrency() {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
  }

  useEffect(()=>{convertAmount()},[])
  useEffect(()=>{convertAmount()},[amount,fromCurrency, toCurrency])
  return (
    <div
      style={{
        width: "45%",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "16px", textAlign: "center" }}>
        Currency Converter
      </h2>

      <label style={{ fontSize: "14px" }}>Amount</label>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={changes}
        style={{
          width: "100%",
          padding: "10px 12px",
          margin: "6px 0 14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          outline: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "8px",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <label style={{ fontSize: "14px" }}>From</label>
          <select
            value={fromCurrency}
            onChange={(e)=>{setFromCurrency(e.target.value)}}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            {topCurrencies.map((values) => {
              return (
                <option key={values} value={values}>
                  {values}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="button"
          onClick={switchCurrency}
          style={{
            marginTop: "20px",
            padding: "6px 10px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          ⇄
        </button>

        <div>
          <label style={{ fontSize: "14px" }}>To</label>
          <select
            value={toCurrency}
            onChange={(e)=>{setToCurrency(e.target.value)}}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            {topCurrencies.map((values) => {
              return (
                <option key={values} value={values} disabled={fromCurrency === values}>
                  {values}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{
          background: "#f6f6f6",
          borderRadius: "12px",
          fontSize: "15px",
        }}
      >
        {!error ? (
          <>
            <strong>{amount || 0}</strong> {fromCurrency} ={" "}
            <strong>{convertedAmount}</strong> {toCurrency}
          </>
        ) : (
          "Enter a valid amount"
        )}
      </div>
    </div>
  );
}
