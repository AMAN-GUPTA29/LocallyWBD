import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import '../components/customerRequestComponent/css/history.css'
import Footer from "../components/customerviewComponent/Footer";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import _Historybody from "../components/historyComponent/_Historybody";
const cookie = new Cookies();

const dummydata =['rakesh','john', 'aman','akansh']
export default () => {
    const token = cookie.get("TOKEN");
    const [history,setHistory] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/consumer/history",{
            method:"GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => res.json())
        .then(data => {
            console.log(data.data)
            setHistory(data.data)
        })
        .catch((error)=>{console.log(error)});
    },[])
    const renderHistoryWithStatus = (status) => {
        return history
            .filter(item => item.status === status)
            .map((item, index) => (
                <_Historybody
                    key={index}
                    _id={item._id}
                    seller={item.sellerid.name}
                    title={item.serviceid.title}
                    charge={item.serviceid.charge}
                    datecompleted={item.datecompleted}
                    status={item.status}
                    time={item.time}
                />
            ));
    };
    return(
        <div>
            <NavPostLog />
            <header className="">
            <h2 className="mx-5 text-black text-4xl text-center font-bold font-serif">Your History</h2>
        </header>

        {/* <h1>Old Requests</h1> */}
            <br />
            <div className="font-serif">
                <h1 className="text-2xl font-semibold mb-3 mx-4">Completed Requests</h1>
              <table className="table-auto w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-center">Customer Name</th>
                    <th className="px-6 py-3 text-center">Title</th>
                    <th className="px-6 py-3 text-center">Charge</th>
                    <th className="px-6 py-3 text-center">Time</th>
                  </tr>
                </thead>
                <tbody>
                    {renderHistoryWithStatus('completed')}
                </tbody>
              </table>
            </div>

            <hr className="text-black"/>

            <div className="font-serif">
                <h1 className="text-2xl font-semibold my-5 mx-4">Rejected Requests</h1>
                <table className="table-auto w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-center">Customer Name</th>
                    <th className="px-6 py-3 text-center">Title</th>
                    <th className="px-6 py-3 text-center">Charge</th>
                    <th className="px-6 py-3 text-center">Time</th>
                  </tr>
                </thead>
                <tbody>
                    {renderHistoryWithStatus('pending')}
                </tbody>
              </table>
                
            </div>
            <Footer />
        </div>
    )
}
