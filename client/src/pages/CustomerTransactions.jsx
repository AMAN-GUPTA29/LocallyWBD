import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import NavPostLog from "../components/customerviewComponent/NavPostLog";
const cookie = new Cookies();
const token = cookie.get("TOKEN");

const CustomerTransactions = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [CustomertransactionsData, setCustomerTransactionData] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/consumer/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCustomerTransactionData(data.data)
        // setFilteredData(data.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log('Transactions filter')
    fetch(`${import.meta.env.VITE_BASE_URL}/api/consumer/transaction/filter/${startDate}/${endDate}`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.data)
        setCustomerTransactionData(data.data)
        // setData(data.data)
        // window.location.reload();
      })
    // const filtered = CustomertransactionsData.filter(transaction => {
    //   const transactionDate = new Date(transaction.time);
      // return (
      //   (!startDate || transactionDate >= new Date(startDate)) &&
      //   (!endDate || transactionDate <= new Date(endDate))
      // );
    // });
    // setFilteredData(filtered);
  };

  return (
    <>
      <NavPostLog />
      <h2 className="text-center text-3xl font-bold font-serif mt-10 mb-6 text-gray-800">Customer Transactions</h2>
      <div className="mx-auto max-w-6xl bg-white shadow-md overflow-hidden sm:rounded-lg font-serif">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-4"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Filter" : "Show Filter"}
        </button>
        {show && (
          <form onSubmit={handleFilter} className="m-4">
            <label htmlFor="start_date">Start Date:</label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="end_date" className="ml-4">End Date:</label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="ml-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Search</button>
          </form>
        )}
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Seller Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rupees(&#8377;)</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {CustomertransactionsData && CustomertransactionsData.map((transaction) => (
              <tr key={transaction.id} className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.transactionid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.sellerid.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transaction.charge}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{new Date(transaction.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {show && (
          <div className="bg-gray-50 px-6 py-4">
            <button
              className="text-white bg-gray-800 px-4 py-2 rounded-md"
              onClick={() => {
                const temp = {
                  id: 6,
                  name: "Akhil",
                  code: "@ 277",
                  date: "9-03-2023",
                  time: "16:25",
                  rupees: "₹ 40.00",
                };
                setCustomerTransactionData([...CustomertransactionsData, temp]);
                setShow(false);
              }}
            >
              See All
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerTransactions;
