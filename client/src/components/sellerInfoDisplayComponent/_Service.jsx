import React from "react";

const Service = () => {
  return (
    <section id="service" className="py-16 flex justify-center items-center">
      <div className="container text-center">
        <div className="text-center">
          <h1 className="text-gray-600 mb-2">Service</h1>
          <h4 className="text-4xl font-bold mb-8">More about me</h4>
          <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. rerum commodi corrupti, temporibus non quam.</p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="grid-item bg-blue-900 hover:bg-gray-300 border border-gray-300 rounded-lg p-8 text-center transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1">
            <div className="icon-box bg-white p-4 rounded-lg inline-block border border-orange-500 mb-4">
              <i className="icon ti-crown text-2xl text-gray-600"></i>
            </div>
            <div>
              <h5 className="font-bold mb-2">HQ TIRUPATI</h5>
            </div>
          </div>
          <div className="grid-item bg-blue-900 hover:bg-gray-300 border border-gray-300 rounded-lg p-8 text-center transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1">
            <div className="icon-box bg-white p-4 rounded-lg inline-block border border-orange-500 mb-4">
              <i className="icon ti-desktop text-2xl text-gray-600"></i>
            </div>
            <div>
              <h5 className="font-bold mb-2">EXPERIENCE 13 YEARS</h5>
            </div>
          </div>
          <div className="grid-item bg-blue-900 hover:bg-gray-300 border border-gray-300 rounded-lg p-8 text-center transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1">
            <div className="icon-box bg-white p-4 rounded-lg inline-block border border-orange-500 mb-4">
              <i className="icon ti-mobile text-2xl text-gray-600"></i>
            </div>
            <div>
              <h5 className="font-bold mb-2">WORKING HOURS OPEN 24 HOURS</h5>
            </div>
          </div>
          <div className="grid-item bg-blue-900 hover:bg-gray-300 border border-gray-300 rounded-lg p-8 text-center transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1">
            <div className="icon-box bg-white p-4 rounded-lg inline-block border border-orange-500 mb-4">
              <i className="icon ti-bar-chart text-2xl text-gray-600"></i>
            </div>
            <div>
              <h5 className="font-bold mb-2">CONTACT NO. 42424424244</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
