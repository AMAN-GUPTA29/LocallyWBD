import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../components/adminLandingPageComponent/navbar';
const cookie = new Cookies();

const AdminHistory = () => {
    const token = cookie.get("TOKEN");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/admin/history", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setHistory(data.data)
        })
        .catch((error) => { console.log(error) });
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className="head text-center font-bold my-4 text-2xl">
                Completed Requests
            </h1>
            {history.filter(item => item.status === "completed").length > 0 ? (
                <div className="container-ss mx-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Seller</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Charge</th>
                                <th className="px-6 py-3">Completed Date</th>
                                <th className="px-6 py-3">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.filter(item => item.status === "completed").map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-6 py-4">{item.customerid.name}</td>
                                    <td className="border px-6 py-4">{item.sellerid.name}</td>
                                    <td className="border px-6 py-4">{item.serviceid.title}</td>
                                    <td className="border px-6 py-4">{item.serviceid.charge}</td>
                                    <td className="border px-6 py-4">{new Date(item.datecompleted).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                    <td className="border px-6 py-4">{new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center">No completed requests</p>
            )}

            <h1 className="head text-center font-bold my-4 text-2xl">
                Rejected Requests
            </h1>
            {history.filter(item => item.status === "pending").length > 0 ? (
                <div className="container-ss mx-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Seller</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Charge</th>
                                <th className="px-6 py-3">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.filter(item => item.status === "pending").map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-6 py-4">{item.customerid.name}</td>
                                    <td className="border px-6 py-4">{item.sellerid.name}</td>
                                    <td className="border px-6 py-4">{item.serviceid.title}</td>
                                    <td className="border px-6 py-4">{item.serviceid.charge}</td>
                                    <td className="border px-6 py-4">{new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center">No rejected requests</p>
            )}
        </div>
    );
}

export default AdminHistory;
