import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import '../components/customerRequestComponent/css/customerrequest.css'
import '../components/customerviewComponent/NavPostLog'
import '../components/customerviewComponent/Footer'
import Areq from '../components/customerRequestComponent/_Acceptedreq'
import Preq from '../components/customerRequestComponent/Pendingreq'
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Footer from "../components/customerviewComponent/Footer";
const cookie = new Cookies();

// const dataaa=["1","2","3"]
// const dataaa1=["hi","bye","aye"]
const data = [
    {
        id: 1,
        title: 'hi',
        accepted: true
    },
    {
        id: 2,
        title: 'hi1',
        accepted: false
    },
    {
        id: 3,
        title: 'hi2',
        accepted: false
    },
    {
        id: 4,
        title: 'hi3',
        accepted: true
    },
]
export default () => {
    const token = cookie.get("TOKEN");
    const [pendingRequests, setPendingRequests] = useState([]);
    const [acceptedRequests, setacceptedRequests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/customer/pendingrequests", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setPendingRequests(data.data)
            })
            .catch(error => console.error(error));

        fetch("http://localhost:8080/api/customer/acceptedrequests", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setacceptedRequests(data.data)
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <NavPostLog />
            {/* <header className="headerr">
                <h2 className="mx-5 text-white h_2">Service</h2>
                <h2 className="mx-5 text-blue-500 h_2">Requests</h2>
            </header> */}
            <h2 className="mx-5 text-black text-5xl text-center font-bold font-serif">Service Requests</h2>
            <br />
            {/* {dataHTML} */}
            {/* {cardArray} */}
            <h1 className="text-black font-bold font-serif text-2xl mx-5">
                Accepted Requests</h1>
            {acceptedRequests &&
                acceptedRequests.map((acceptedRequest, index) => {
                    console.log(acceptedRequest);
                    return (
                        <Areq
                            key={index}
                            _id={acceptedRequest._id}
                            sellerid={acceptedRequest.sellerid._id}
                            seller={acceptedRequest.sellerid.name}
                            email={acceptedRequest.sellerid.email}
                            phone={acceptedRequest.sellerid.phone}
                            title={acceptedRequest.serviceid.title}
                            charge={acceptedRequest.serviceid.charge}
                            description={acceptedRequest.serviceid.description}
                        />
                    );
                })
            }

            <h1 className="text-black font-bold font-serif text-2xl mx-5">
                Pending Requests</h1>


            {pendingRequests &&
                pendingRequests.map((pendingRequest, index) => {
                    console.log(pendingRequest);
                    return (
                        <Preq
                            key={index}
                            _id={pendingRequest._id}
                            seller={pendingRequest.sellerid.name}
                            email={pendingRequest.sellerid.email}
                            phone={pendingRequest.sellerid.phone}
                            title={pendingRequest.serviceid.title}
                            charge={pendingRequest.serviceid.charge}
                            description={pendingRequest.serviceid.description}
                        />
                    );
                })
            }
            <Footer />
        </div>
    )

}