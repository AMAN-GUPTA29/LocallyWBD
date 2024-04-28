import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Transactions from '../components/sellerhomeComponent/Transactions';
import ChartJS from 'chart.js/auto';
import Navbar from '../components/sellerhomeComponent/Navbar';




const SellerHome = () => {
  const [requests, setRequests] = useState();
  const [completedRequests, setCompletedRequests] = useState();
  const [rating, setRating] = useState();
  const [reviewsClicked, setReviewsClicked] = useState(false);

  const options = {
    scales: {
      x: {
        grid: {
          offset: true
        }
      }
    }
  };

  const barChartData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Reviews',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [3, 11, 14, 10, 8],
      },
    ],
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case 'new':
        setRequests(4);
        break;
      case 'total':
        setCompletedRequests(18);
        break;
      case 'stars':
        setRating(3.9);
        break;
      default:
        break;
    }
  };

  const handleReviewsClick = () => {
    setReviewsClicked(true);
  };

  return (
    <div className="container">
      <Navbar/>
      <div className="my-4 flex justify-evenly">
        <button className="btn btn-dark " onClick={() => handleButtonClick('new')} role="button" style={{ backgroundColor: 'coral', color: 'white' }}>
          New {requests && `(${requests})`}
        </button>
        <button className="btn btn-dark " onClick={() => handleButtonClick('total')} role="button" style={{ backgroundColor: 'green', color: 'white' }}>
          Total{completedRequests && `(${completedRequests})`}
        </button>
        <button className="btn btn-dark " onClick={() => handleButtonClick('stars')} role="button" style={{ backgroundColor: 'orange', color: 'white' }}>
          Stars {rating &&` (${rating})`}
        </button>
        {reviewsClicked ? (
          <span className="btn btn-dark " style={{ backgroundColor: 'blue', color: 'white' }}>Excellent</span>
        ) : (
          <button className="btn btn-dark" onClick={handleReviewsClick} role="button" style={{ backgroundColor: 'blue', color: 'white' }}>
            Reviews
          </button>
        )}
      </div>
      <div className="trade border border-dark rounded w-2/3 m-auto">
  <h2 className="mx-5 my-3 text-4xl font-extrabold italic text-center text-beige-600">Trade</h2>
  <hr className="border border-secondary opacity-100" />
  <div className="content text-center m-3">
    <div className="flex justify-center m-1">
      <div className="bg-dark-subtle p-3 min-w-48 text-gray-800 text-xl font-bold">Net income---</div>
      <div className="bg-dark opacity-75 text-white p-3 min-w-40">&#8377;12000</div>
    </div>
    <div className="flex justify-center m-2">
    <div className="bg-dark-subtle p-3 min-w-48 text-gray-800 text-xl font-bold">Daily income---</div>
      <div className="bg-dark opacity-75 text-white p-3 min-w-40">&#8377;400</div>
    </div>
  

        </div>
        <hr className="border border-secondary opacity-100" />
        <div className="bar-graph">
          <h3 className="text-3xl font-extrabold italic text-crimson-700 py-3 text-center">Number of Reviews vs Rating</h3>

          <Bar
            data={barChartData}
            options={options}
          />
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default SellerHome;