import React, { useState } from "react";

const CurrencyConverterForm = ({ exchangeRates }) => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your conversion logic here
        const fromRate = exchangeRates.find(
            (rate) => rate.currencyCode === fromCurrency
        )?.exchangeRate;
        const toRate = exchangeRates.find(
            (rate) => rate.currencyCode === toCurrency
        )?.exchangeRate;
        if (fromRate && toRate) {
            const converted = (amount / fromRate) * toRate;
            setConvertedAmount(converted.toFixed(2));
        } else {
            alert("Currency not found in exchange rates");
        }
    };

    return (
        <form className="form-div" onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <div>
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                required
            >
                <option value="">Select From Currency</option>
                {exchangeRates.map((rate) => (
                    <option key={rate.currencyCode} value={rate.currencyCode}>
                        {console.log(rate, "@@@@@")}
                        {rate.currencyCode}
                    </option>
                ))}
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                required
            >
                <option value="">Select To Currency</option>
                {exchangeRates.map((rate) => (
                    <option key={rate.currencyCode} value={rate.currencyCode}>
                        {rate.currencyCode}
                    </option>
                ))}
            </select>
            </div>
            <button type="submit">Convert</button>
            {convertedAmount && <p>Converted Amount: {convertedAmount}</p>}
        </form>
    );
};

export default CurrencyConverterForm;
