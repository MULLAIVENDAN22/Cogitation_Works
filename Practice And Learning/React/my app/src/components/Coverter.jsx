import React, { useState, useEffect } from "react";

const RATES = {
  USD: 1,
  INR: 83.2,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 147.3,
};

const CURRENCIES = Object.keys(RATES);

export default function Converter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount < 0) {
      setConvertedAmount("");
      return;
    }

    // convert "from" → USD → "to"
    const inUsd = numericAmount / RATES[fromCurrency];
    const result = inUsd * RATES[toCurrency];

    setConvertedAmount(result.toFixed(2));
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
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
        onChange={(e) => setAmount(e.target.value)}
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
            onChange={(e) => setFromCurrency(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            {CURRENCIES.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleSwap}
          style={{
            marginTop: "20px",
            padding: "6px 10px",
            borderRadius: "999px",
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
            onChange={(e) => setToCurrency(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            {CURRENCIES.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        style={{
          background: "#f6f6f6",
          borderRadius: "12px",
          padding: "12px 14px",
          fontSize: "15px",
        }}
      >
        {convertedAmount !== "" ? (
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
