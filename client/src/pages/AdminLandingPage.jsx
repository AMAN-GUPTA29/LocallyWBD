import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../components/adminLandingPageComponent/admincss/adminland.css"

// import { Barchart } from "./barchart";
// import Piechart from "./piechart";
import Navbar from "../components/adminLandingPageComponent/navbar";

import Photos from "../components/adminLandingPageComponent/photos";
import contactsimg from '../components/adminLandingPageComponent/adminimages/contacts.jpg';
import subscribedimg from '../components/adminLandingPageComponent/adminimages/subscribed.jpeg';
import pendingimg from '../components/adminLandingPageComponent/adminimages/pending.png';
import blockedimg from '../components/adminLandingPageComponent/adminimages/blocked2.jpeg';
import customerimg from '../components/adminLandingPageComponent/adminimages/customerimg.jpg';
import serviceproviderimg from '../components/adminLandingPageComponent/adminimages/serviceproviderimg.jpg';
import Card from "../components/adminLandingPageComponent/card";
import Line from "../components/adminLandingPageComponent/line";
import axios from 'axios';
// import { useAuth } from "../AuthContext";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export default function AdminLandingPage() {
    const token = cookie.get("TOKEN");
    // const { authUserToken } = useAuth();
    const [sellers, setSellers] = useState([]);
    const [customerCount, setCustomerCount] = useState([]);
    const [sellerCount, setSellerCount] = useState([]);
    const [serviceCount, setServiceCount] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const customerResponse = await axios.get('http://localhost:8080/api/admin/consumerlist', config);
                setCustomerCount(customerResponse.data.data);

                const sellerResponse = await axios.get('http://localhost:8080/api/admin/sellerlist', config);
                setSellerCount(sellerResponse.data.data);

                const serviceResponse = await axios.get('http://localhost:8080/api/admin/totalservice', config);
                setServiceCount(serviceResponse.data.data);
                console.log(serviceResponse.data);

                // const allSellerResponse = await axios.get('http://localhost:8080/api/allSellerDetails', config);
                // setSellers(allSellerResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bodyy">
            <Navbar />
            {/* <div className="flex flex-wrap justify-evenly ">
                <div className="w-full md:w-7/12 border rounded-lg bg-white">
                    <h1 className="text-xl font-bold mb-3">% of Subscribers Registered</h1>
                    <Barchart />
                </div>
                <div className="w-full md:w-4/12 border rounded-lg bg-white">
                    <h1 className="text-xl font-bold mb-3">% of Types of Services</h1>
                    <Piechart />
                </div>
            </div> */}

            <div className="four-cards flex flex-row border justify-evenly">
                <div className="w-1/4 m-4 px-7 py-4 boxes border contact grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">All Customers</div>
                    <span className="contact-number rounded-full text-center text-2xl font-bold">{customerCount.length}</span>
                    <div className="contact-img row-end-3">
                        <img src={contactsimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                <div className="w-1/4 m-4 px-7 py-4 boxes border subscribed grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">All Sellers</div>
                    <div className="subscribed-number rounded-full text-center text-2xl font-bold">{sellerCount.length}</div>
                    <div className="contact-img row-end-3">
                        <img src={subscribedimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                <div className="w-1/4 m-4 px-7 py-4 boxes border pending grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">Services Done</div>
                    <div className="pending-number rounded-full text-center text-2xl font-bold">{serviceCount}</div>
                    <div className="contact-img row-end-3">
                        <img src={pendingimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2">
                        <Photos />
                    </div>
                </div>
                {/* <div className="w-1/4 m-4 px-7 py-4 boxes border blocked grid grid-cols-3 gap-4 rounded-xl">
                    <div className="name col-span-2 text-xl font-bold">Blocked</div>
                    <div className="blocked-number rounded-full text-center text-2xl font-bold">6</div>
                    <div className="contact-img row-end-3">
                        <img src={blockedimg} alt="Contacts" className="rounded-full" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="contact-photos col-span-2 mr-10">
                        <Photos />
                    </div>
                </div> */}
            </div>

            <div className="m-4 my-7">
                {/* <Line /> */}
            </div>

            <div className="topRated-heading text-green-700 m-3 font-semibold text-2xl my-7">Top Liked Service Providers</div>
            <div className="overflow-x-auto whitespace-no-wrap my-5">
                <div className="flex">
                    {sellers
                        .filter((seller) => seller.like > 10)
                        .sort((a, b) => b.like - a.like) // Sort in descending order based on 'like'
                        .map((seller) => (
                            <div key={seller.name} className="w-1/4 flex-none mx-2">
                                <div className="rounded-2xl border overflow-hidden mx-3">
                                    <Card
                                        name={seller.name}
                                        like={seller.like}
                                        phone={seller.phone}
                                        address={seller.address}
                                    />
                                </div>
                            </div>
                        ))}
                    {/* <div className="w-1/4 flex-none mx-2">
                            <div className="rounded-2xl border overflow-hidden mx-3">
                                <Card
                                    
                                />
                            </div>
                        </div> */}
                </div>
            </div>


            <div className="bg-gray-900 p-3 my-5 mx-5 rounded-3 text-center">
                <h2 className="m-2 text-white pb-4">Manage Your Subscribers</h2>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    <Link className="bg-white text-black mx-5 mb-3 rounded-lg overflow-hidden" to="/admincustomer">
                        <div className="aspect-w-1 aspect-h-1">
                            <img src={customerimg} className="object-cover h-full w-full" alt="..." />
                        </div>
                        <div className="p-4">
                            <h5 className="text-center">CUSTOMERS</h5>
                        </div>
                    </Link>
                    <Link className="bg-white text-black mx-5 mb-3 rounded-lg overflow-hidden" to="/adminworker">
                        <div className="aspect-w-1 aspect-h-1">
                            <img src={serviceproviderimg} className="object-cover h-full w-full" alt="..." />
                        </div>
                        <div className="p-4">
                            <h5 className="text-center">Workers</h5>
                        </div>
                    </Link>
                </div>
            </div>






        </div>
    )
}