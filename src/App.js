import React, { useEffect, useState } from "react";
import './App.css'
import CurrencyConverterForm from "./CurrencyConverterForm";
import ExchangeRateTable from "./ExchangeRateTable";

const App = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      const data = await response.json();
      const rates = Object.entries(data.rates).map(
        ([currencyCode, exchangeRate]) => ({
          currencyCode,
          currencyName: "", // We'll need to fetch the currency names separately
          exchangeRate,
        })
      );
      setExchangeRates(rates);
      // Now fetch currency names using another API or from a local source
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };
  console.log("check grere", exchangeRates);
  return (
    <div className="app-container">
      <div>
        <h2>Currency Converter</h2>
        <CurrencyConverterForm exchangeRates={exchangeRates} />
        <h2>Exchange Rates</h2>
        <ExchangeRateTable exchangeRates={exchangeRates} />
      </div>
    </div>
  );
};

export default App;
