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
                    <About name={sellerInfo.name} tag="plumber" description="Very good plumber has had an experience of plumbing and other minor jobs involved in it since 15 years, has fixed many water spots and solved many household issues."/>
                    <div className="my-10">
                    <div className="text-lg font-bold my-5">Service Info</div>
                    <div>Title : {serviceInfo.title}</div>
                    <div>Description: {serviceInfo.description}</div>
                    <div>Charge : {serviceInfo.charge}</div>
                    </div>
                    
                    <div className="text-lg font-bold my-5">Reviews</div>
                    {serviceInfo ? (
        <div>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>Consumer Name: {review.consumername}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Review: {review.review}</p>
                </div>
            ))}
        </div>
    ) : (
        <p>Loading reviews...</p>
    )}
                    <Service/>
                    <Contact source="https://snazzymaps.com/embed/61257"/>
                   {/* <MapWithMarker/> */}
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default MainComponent;





// const MapWithMarker = () => {
//     const [viewport, setViewport] = useState({
//       latitude: 37.7577,
//       longitude: -122.4376,
//       zoom: 11,
//     });
  
//     const [selectedLocation, setSelectedLocation] = useState(null);
  
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <ReactMapGL
//           {...viewport}
//           width="100%"
//           height="100%"
//           mapStyle="mapbox://styles/mapbox/streets-v11"
//           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//           onViewportChange={(viewport) => setViewport(viewport)}
//         >
//           {/* Markers */}
//           <Marker
//             latitude={37.7577}
//             longitude={-122.4376}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-red-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 />
//               </svg>
//             </div>
//           </Marker>
  
//           {/* Popup */}
//           {selectedLocation && (
//             <Popup
//               latitude={selectedLocation.latitude}
//               longitude={selectedLocation.longitude}
//               onClose={() => setSelectedLocation(null)}
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   Selected Location Details
//                 </h2>
//                 <p>
//                   Latitude: {selectedLocation.latitude}, Longitude:{" "}
//                   {selectedLocation.longitude}
//                 </p>
//               </div>
//             </Popup>
//           )}
//         </ReactMapGL>
//       </div>
//     );
//   };
  