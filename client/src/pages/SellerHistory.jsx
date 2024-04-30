import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import Navbar from '../components/sellerhomeComponent/Navbar';
import { Footer } from "../components/sellerServicesComponent/Footer";
const cookie = new Cookies();

export default function SellerHistory() {
    const token = cookie.get("TOKEN");
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/seller/history", {
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
    // const renderHistoryWithStatus = (status) => {
    //     return history
    //         .filter(item => item.status === status)
    //         .map((item, index) => (
    //             <_Historybody
    //                 key={index}
    //                 _id={item._id}
    //                 seller={item.sellerid.name}
    //                 title={item.serviceid.title}
    //                 charge={item.serviceid.charge}
    //                 time={item.time}
    //             />
    //         ));
    // };
    return (
        <div>
            <Navbar />

            <header className="headerr">
                <h2 className="mx-5 text-white h_2">Your History</h2>
            </header>

            {/* <h1>Old Requests</h1> */}
            <br />
            <div>
                <h1 className="text-2xl font-semibold">Completed Requests</h1>
                {
                    history
                        .filter(item => item.status === "completed")
                        .map((item, index) => (
                            <div key={index}>
                                <div>Customer={item.customerid.name}</div>
                                <div>Title={item.serviceid.title}</div>
                                <div>Charge={item.serviceid.charge}</div>
                                <div>Completed Date={new Date(item.datecompleted).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>                              
                                <div>Time: {new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>                              
                            </div>
                        ))}
            </div>

            <div>
                <h1 className="text-2xl font-semibold">Rejected Requests</h1>
                {
                    history
                        .filter(item => item.status === "pending")
                        .map((item, index) => (
                            <div key={index}>
                                <div>Customer={item.customerid.name}</div>
                                <div>Title={item.serviceid.title}</div>
                                <div>Charge={item.serviceid.charge}</div>
                                <div>Time: {new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>                              
                            </div>
                        ))}
            </div>

            {/* <div>
                <h1 className="text-2xl font-semibold">Rejected Requests</h1>
                {renderHistoryWithStatus('pending')}
            </div> */}
            <Footer />
        </div>
    )
}