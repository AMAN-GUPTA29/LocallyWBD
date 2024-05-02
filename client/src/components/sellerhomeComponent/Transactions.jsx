import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookie = new Cookies();
const token = cookie.get("TOKEN");

const Transactions = () => {
  const token = cookie.get("TOKEN");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactionsData,setTransactionData]=useState([]);
  const [showall,setShowall] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(()=>{
    fetch('http://localhost:8080/api/seller/transaction', {
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
    
  },[])

  const handleFilter = (e) => {
    e.preventDefault();
    console.log('Transactions filter')
    fetch(`http://localhost:8080/api/seller/transaction/filter/${startDate}/${endDate}`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.data)
        setTransactionData(data.data)
        // setData(data.data)
        // window.location.reload();
      })
  };

  return (
    <>
      <h2 className="text-center text-3xl font-bold mt-10 mb-6 text-gray-800">Transactions</h2>
      <div className="mx-auto max-w-6xl bg-white shadow-md overflow-hidden sm:rounded-lg">
        
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
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rupees(&#8377;)</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {transactionsData && transactionsData.map((transaction) => (
              <tr key={transaction.id} className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.transactionid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.customerid.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transaction.charge}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{new Date(transaction.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showall && (
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
                setTransactionData([...transactionsData, temp]);
                setShowall(false);
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

export default Transactions;