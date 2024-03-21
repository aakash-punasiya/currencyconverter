// ExchangeRateTable.js
import React, { useState, useEffect } from "react";

const ExchangeRateTable = () => {
    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
        fetch("API_URL")
            .then((response) => response.json())
            .then((data) => setExchangeRates(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const initialData = [
        { code: "asasd", name: "rasxaxas sxaxsxds sxxqw", rate: 123 },
        { code: "dcdwasasd", name: "acesxaxas sxaxsxds sxxqw", rate: 1253 },
        { code: "ascefvasd", name: "afvasxaxas sxaxsxds sxxqw", rate: 1323 },
        { code: "gasasd", name: "rasxaxas sxaxsxds sxxqw", rate: 1723 },
        { code: "kjdcdwasasd", name: "tyacesxaxas sxaxsxds sxxqw", rate: 1823 },
        { code: "tascefvasd", name: "hnnfvasxaxas sxaxsxds sxxqw", rate: 129 },
        { code: "asasd", name: "rasxaxas sxaxsxds sxxqw", rate: 123 },
        { code: "dcdwasasd", name: "acesxaxas sxaxsxds sxxqw", rate: 1253 },
        { code: "ascefvasd", name: "afvasxaxas sxaxsxds sxxqw", rate: 1323 },
        { code: "gasasd", name: "rasxaxas sxaxsxds sxxqw", rate: 1723 },
        { code: "kjdcdwasasd", name: "tyacesxaxas sxaxsxds sxxqw", rate: 1823 },
        { code: "tascefvasd", name: "hnnfvasxaxas sxaxsxds sxxqw", rate: 129 },
        { code: "asasd", name: "rasxaxas sxaxsxds sxxqw", rate: 123 },
        { code: "dcdwasasd", name: "acesxaxas sxaxsxds sxxqw", rate: 1253 },
        { code: "ascefvasd", name: "afvasxaxas sxaxsxds sxxqw", rate: 1323 },
        { code: "gasasd", name: "rasxaxas sxaxsxds sxxqw", rate: 1723 },
        { code: "kjdcdwasasd", name: "tyacesxaxas sxaxsxds sxxqw", rate: 1823 },
        { code: "tascefvasd", name: "hnnfvasxaxas sxaxsxds sxxqw", rate: 129 },
        { code: "asasd", name: "rasxaxas sxaxsxds sxxqw", rate: 123 },
        { code: "dcdwasasd", name: "acesxaxas sxaxsxds sxxqw", rate: 1253 },
        { code: "ascefvasd", name: "afvasxaxas sxaxsxds sxxqw", rate: 1323 },
        { code: "gasasd", name: "rasxaxas sxaxsxds sxxqw", rate: 1723 },
        { code: "kjdcdwasasd", name: "tyacesxaxas sxaxsxds sxxqw", rate: 1823 },
        { code: "tascefvasd", name: "hnnfvasxaxas sxaxsxds sxxqw", rate: 129 },
        // Add more initial data here...
    ];

    const [data, setData] = useState(initialData);
    const [sortBy, setSortBy] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleSort = (key) => {
        const newData = [...data];
        newData.sort((a, b) => a[key].localeCompare(b[key]));
        setData(newData);
        setSortBy(key);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{overflow: 'auto'}}>
            <table className="table-div">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('code')}>Currency Code <span className="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg></span></th>
                        <th onClick={() => handleSort('name')}>Currency Name <span className="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg></span></th>
                        <th>Exchange Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {data.length > itemsPerPage && (
                    <div className="pagination-div">
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                            <span key={index}>
                                <button onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExchangeRateTable;

