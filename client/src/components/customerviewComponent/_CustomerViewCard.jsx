import React from "react";
import { serviceActions } from "../features/servicerequest/servicerequestSlice";

function CustomerViewCard({ _id, title, tag, charge, description, pointer }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-10">
      <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-row items-center gap-20">
        <div>
          <img src={pointer.img} alt="image" height="150px" width="150px" className="rounded-xl"/>
        </div>
        <div className="font-mono">
          <a href="#">
          <div className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">Name : {pointer.name}</div>
            <div className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">Title : {title}</div>
          </a>
          <p className="mb-3 font-semibold text-gray-800 text-lg">Tag : {tag}</p>
          <p className="mb-3 font-semibold text-gray-800 text-lg">Charge : {charge}</p>
        </div>
        <div className="text-lg font-serif">
          <div className="font-semibold">Description</div>
          {description}
        </div>
        <div className="flex flex-col items-center justify-center ml-auto">
          <a href={`/customerView/display/${_id}/${pointer._id}`} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Hire
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomerViewCard;
