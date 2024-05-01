import React, { useEffect, useState } from 'react';
import '../components/adminLandingPageComponent/admincss/customer.css';
import Navbar from '../components/adminLandingPageComponent/navbar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const AdminTransaction = () => {
  const token = cookie.get("TOKEN");
  const [transactions, setTransactions] = useState([]);

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

  return (
    <div>
      <Navbar />
      <h1 className="head text-center font-bold my-4 text-2xl">
        Transactions
      </h1>

      {transactions && (
        <div className="container-ss mx-auto">
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
