import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from 'axios';
import About from "../components/sellerInfoDisplayComponent/_About";
import Footer from "../components/customerviewComponent/Footer";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Header from "../components/sellerInfoDisplayComponent/_Header";
import Contact from "../components/sellerInfoDisplayComponent/_Contact";
import Service from "../components/sellerInfoDisplayComponent/_Service";
const cookie = new Cookies();

const MainComponent = () => {
    const token = cookie.get("TOKEN");
    // console.log(useParams());
    const { _id,pointer } = useParams();
    const [sellerInfo,setSellerInfo] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [serviceInfo,setServiceInfo] = useState([]);
    useEffect(() => {
        console.log(_id,pointer)
        fetch("http://localhost:8080/api/consumer/sellerprofileview", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                pointer: pointer,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setSellerInfo(data.data)
        })
        .catch(error => console.error(error));

        fetch("http://localhost:8080/api/consumer/sellerreview", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                _id: pointer,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setReviews(data.data)
        })
        .catch(error => console.error(error));

        fetch("http://localhost:8080/api/consumer/seller/optedservice", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                _id: _id,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setServiceInfo(data.data)
        })
        .catch(error => console.error(error));
    }, []);
    
    
    return (
        <div className="min-h-screen flex flex-col">
            <NavPostLog />
            <Header _id={serviceInfo._id} seller_id={sellerInfo._id} name={sellerInfo.name} email={sellerInfo.email} phone={sellerInfo.phone} address={sellerInfo.address} pin={sellerInfo.pin} />
            <div className="flex-grow flex justify-center items-center">
                <div>
                    <About img={sellerInfo.img} name={sellerInfo.name} tag="plumber" description="Very good plumber has had an experience of plumbing and other minor jobs involved in it since 15 years, has fixed many water spots and solved many household issues."/>
                    <div className="my-12">
                    <div className="text-3xl text-center font-bold my-5 font-serif">Service Info</div>
                    <div className="text-lg font-serif mx-10">Title : {serviceInfo.title}</div>
                    <div className="text-lg font-serif mx-10">Charge : {serviceInfo.charge} ₹ </div>
                    <div className="text-lg font-serif mx-10">Description: {serviceInfo.description}</div>
                    </div>
                    
                    <div className="text-2xl text-center font-bold my-5 font-serif">Reviews and Rating of {sellerInfo.name}</div>
                    {serviceInfo ? (
        <div>
            <table className="min-w-full divide-y divide-gray-200 mx-10">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-md text-gray-900 font-serif uppercase tracking-wider">
                Consumer Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-md text-gray-900 font-serif uppercase tracking-wider">
                Rating
            </th>
            <th scope="col" className="px-6 py-3 text-left text-md text-gray-900 font-serif uppercase tracking-wider">
                Review
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 font-serif">
        {reviews && reviews.map((review, index) => (
            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.consumername}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.rating}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.review}</div>
                </td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    ) : (
        <p>Loading reviews...</p>
    )}
                    {/* <Service/> */}
                    <Contact address={sellerInfo.address} phone={sellerInfo.phone} email={sellerInfo.email} source="https://snazzymaps.com/embed/61257"/>
                   {/* <MapWithMarker/> */}
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default MainComponent;
