import React from "react";
import About from "../components/sellerInfoDisplayComponent/_About";
import Footer from "../components/customerviewComponent/Footer";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Header from "../components/sellerInfoDisplayComponent/_Header";
import Contact from "../components/sellerInfoDisplayComponent/_Contact";
import Service from "../components/sellerInfoDisplayComponent/_Service";

const MainComponent = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavPostLog />
            <Header url_id="1" name="Anmol" tag="Auto" like="2" dislike="11" />
            <div className="flex-grow flex justify-center items-center">
                <div>
                    <About name="Anmol" tag="plumber" description="Very good plumber has had an experience of plumbing and other minor jobs involved in it since 15 years, has fixed many water spots and solved many household issues."/>
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
  