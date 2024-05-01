import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import NavPostLog from "../components/customerviewComponent/NavPostLog";
const token = cookie.get("TOKEN");

const CustomerTransactions = () => {
  const token = cookie.get("TOKEN");
  const [CustomertransactionsData,setTransactionData]=useState([]);
  const [show,setShow] = useState(true);
  useEffect(()=>{
    fetch('http://localhost:8080/api/consumer/transaction', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTransactionData(data.data)
      })
      .catch(error => console.error('Error fetching data:', error));
    // setTransactionData(
    //   [
    //     {
    //       id: 1,
    //       name: "Varun",
    //       code: "@ 175",
    //       date: "18-03-2023",
    //       time: "21:45",
    //       rupees: "₹ 40.00",
    //     },
    //     {
    //       id: 2,
    //       name: "Chaitanya",
    //       code: "@ 199",
    //       date: "18-03-2023",
    //       time: "14:20",
    //       rupees: "₹ 120.00",
    //     },
    //     {
    //       id: 3,
    //       name: "Vivek",
    //       code: "@ 007",
    //       date: "10-03-2023",
    //       time: "10:07",
    //       rupees: "₹ 70.00",
    //     },
    //     {
    //       id: 4,
    //       name: "Uday",
    //       code: "@ 118",
    //       date: "9-03-2023",
    //       time: "18:50",
    //       rupees: "₹ 200.00",
    //     },
    //     {
    //       id: 5,
    //       name: "Eswar",
    //       code: "@ 277",
    //       date: "9-03-2023",
    //       time: "16:25",
    //       rupees: "₹ 30.00",
    //     }
    //   ]
    // )
  },[])

  return (
    <>
    <NavPostLog/>
      <h2 className="text-center text-3xl font-bold mt-10 mb-6 text-gray-800">Customer Transactions</h2>
      <div className="mx-auto max-w-6xl bg-white shadow-md overflow-hidden sm:rounded-lg">
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
                setTransactionData([...CustomertransactionsData, temp]);
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