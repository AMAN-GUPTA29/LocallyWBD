import React from 'react'
import { useState,useEffect } from 'react';
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
        }).then(res => res.json())
            .then(data => {
                console.log(data.data)
                setHistory(data.data)
            })
            .catch((error) => { console.log(error) });
    }, [])
    console.log(history)
  return (
    <div>
        <Navbar/>

        <div>
                <h1 className="text-2xl font-semibold">Completed Requests</h1>
                {
                    history
                        .filter(item => item.status === "completed")
                        .map((item, index) => (
                            <div key={index}>
                                <div>Customer={item.customerid.name}</div>
                                <div>Seller={item.sellerid.name}</div>
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
                                <div>Seller={item.sellerid.name}</div>
                                <div>Title={item.serviceid.title}</div>
                                <div>Charge={item.serviceid.charge}</div>
                                <div>Time: {new Date(item.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>                              
                            </div>
                        ))}
            </div>
      
    </div>
  )
}

export default AdminHistory
