import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceActions } from "../features/servicerequest/servicerequestSlice";

function CustomerViewCard({ photo, title, tag, charge, description }) {
  const dispatch = useDispatch();

  const kuchBhi = () => {
    dispatch(
      serviceActions.addservicerequest({
        naam: title,
        money: charge,
        type: tag,
      })
    );
  };

  const lol = useSelector((state) => state.servicerequest.servicerequest);
  console.log(lol);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:flex flex justify-around">
        <div className="md:flex-shrink-0">
          <img
            src={photo}
            alt="Seller Image"
            className="md:w-56 h-48 object-cover object-center"
          />
        </div>
        <div className="p-8">
          <h5 className="text-xl font-semibold">{title}</h5>
          <h5 className="text-lg font-semibold">Service: {tag}</h5>
          {charge ? (
            <h5 className="text-lg font-semibold">Charge: {charge}</h5>
          ) : (
            <h5 className="text-lg font-semibold">Charge: Undisclosed</h5>
          )}
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4">
            <a
              href="/customerView/display/"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
              onClick={kuchBhi}
            >
              Hire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerViewCard;
