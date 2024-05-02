import React, { useEffect, useState } from 'react';
import '../components/adminLandingPageComponent/admincss/customer.css';
import Navbar from '../components/adminLandingPageComponent/navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const AdminTransaction = () => {
  const token = cookie.get("TOKEN");
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/transaction', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setTransactions(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    console.log('Transactions filter')
    fetch(`http://localhost:8080/api/admin/transaction/filter/${startDate}/${endDate}`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.data)
        setTransactions(data.data)
      })
  };

  return (
    <div>
      <Navbar />
      <h1 className="head text-center font-bold my-4 text-2xl">
        Transactions
      </h1>
      

      {transactions && (
        <div className="container-ss mx-auto">
          <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-4 self-start"
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
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Seller Name</th>
                <th className="px-4 py-2">Charge</th>
              </tr>
            </thead>
            <tbody>
              {transactions && transactions.map((transaction, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">{transaction._id}</td>
                  <td className="border px-4 py-2">{transaction.customerid ? transaction.customerid.name : 'N/A'}</td>
                  <td className="border px-4 py-2">{transaction.sellerid ? transaction.sellerid.name : 'N/A'}</td>
                  <td className="border px-4 py-2">{transaction.charge ? transaction.charge : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default AdminTransaction;
