import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import Navbar from '../components/sellerhomeComponent/Navbar';
import { Footer } from "../components/sellerServicesComponent/Footer";
const cookie = new Cookies();

const SellerHistory = () => {
    const token = cookie.get("TOKEN");
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/seller/history`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data.data)
                setHistory(data.data)
            })
            .catch((error) => { console.log(error) });
    }, [])

    return (
        <div>
            <Navbar />

            <header className="">
                <h2 className="mx-5 text-yellow-600 text-center text-5xl font-bold">Your History</h2>
            </header>

            <div className="container-ss mx-auto">
              <h1 className="head text-center font-bold my-4 text-2xl">Completed Requests</h1>
              <table className="table-auto w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3">Customer Name</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Charge</th>
                    <th className="px-6 py-3">Completed Date</th>
                    <th className="px-6 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {history && history
                    .filter(item => item.status === "completed")
                    .map((item, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-6 py-4">{item.customerid.name}</td>
                        <td className="px-6 py-4">{item.serviceid.title}</td>
                        <td className="px-6 py-4">{item.serviceid.charge}</td>
                        <td className="px-6 py-4">{new Date(item.datecompleted).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td className="px-6 py-4">{new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="container-ss mx-auto">
              <h1 className="head text-center font-bold my-4 text-2xl">Rejected Requests</h1>
              <table className="table-auto w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3">Customer Name</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Charge</th>
                    <th className="px-6 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {history && history
                    .filter(item => item.status === "pending")
                    .map((item, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-6 py-4">{item.customerid.name}</td>
                        <td className="px-6 py-4">{item.serviceid.title}</td>
                        <td className="px-6 py-4">{item.serviceid.charge}</td>
                        <td className="px-6 py-4">{new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <Footer />
        </div>
    )
}

export default SellerHistory;
