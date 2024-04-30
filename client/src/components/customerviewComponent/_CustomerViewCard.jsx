import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { serviceActions } from "../features/servicerequest/servicerequestSlice";

function CustomerViewCard({ _id, title, tag, charge, description, pointer}) {
  console.log(pointer,"pointer");
  // const dispatch = useDispatch();

  // const kuchBhi = () => {
  //   dispatch(
  //     serviceActions.addservicerequest({
  //       naam: title,
  //       money: charge,
  //       type: tag,
  //     })
  //   );
  // };

  // const lol = useSelector((state) => state.servicerequest.servicerequest);
  // console.log(lol);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
      <div className="md:flex flex justify-items-center">
        {/* <div className="md:flex-shrink-0">
          <img
            src={photo}
            alt="Seller Image"
            className="md:w-56 h-48 object-cover object-center"
          />
        </div> */}
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
              href={`/customerView/display/${_id}/${pointer}`}
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
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
