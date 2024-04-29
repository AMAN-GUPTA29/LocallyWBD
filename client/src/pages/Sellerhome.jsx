import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Bar } from 'react-chartjs-2';
import Transactions from '../components/sellerhomeComponent/Transactions';
import ChartJS from 'chart.js/auto';
import Navbar from '../components/sellerhomeComponent/Navbar';

const cookie = new Cookies();

const SellerHome = () => {
  const token = cookie.get("TOKEN");
  console.log(token)
  const [seller, setSeller] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    income: ""
  });
  // const [review,SetReview] = useState({
  //   consumername:"",
  //   review:"",
  //   rating:""
  // })
  const [reviews, setReviews] = useState([]);
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

  useEffect(() => {
    console.log(token);
    fetch('http://localhost:8080/api/seller/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        if (data.message === "founduser") {
          data = data.data
          setSeller(prevState => ({
            ...prevState,
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            pin: data.pin,
            income: data.income
          }));
        }
        console.log("from seller", seller)
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch('http://localhost:8080/api/seller/review/route', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setReviews(data.data);
        console.log(reviews)
      })
      .catch(error => console.error('Error fetching data:', error));


  }, []);


  const calculateReviewData = () => {
    let reviewData = [0, 0, 0, 0, 0]; // Initialize array to store review counts for each star rating
  
    // Loop through reviews and increment corresponding index in reviewData based on rating
    reviews.forEach(review => {
      const ratingIndex = Math.floor(review.rating) - 1; // Ratings are 1-5, so subtract 1 to get index
      if (ratingIndex >= 0 && ratingIndex <= 4) {
        reviewData[ratingIndex]++;
      }
    });
  
    return reviewData;
  };

  const barChartData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Reviews',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: calculateReviewData(),
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
      <Navbar />
      <div className="my-4 flex justify-evenly">
        <button className="btn btn-dark " onClick={() => handleButtonClick('new')} role="button" style={{ backgroundColor: 'coral', color: 'white' }}>
          New {requests && `(${requests})`}
        </button>
        <button className="btn btn-dark " onClick={() => handleButtonClick('total')} role="button" style={{ backgroundColor: 'green', color: 'white' }}>
          Total{completedRequests && `(${completedRequests})`}
        </button>
        <button className="btn btn-dark " onClick={() => handleButtonClick('stars')} role="button" style={{ backgroundColor: 'orange', color: 'white' }}>
          Stars {rating && ` (${rating})`}
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
            <div className="bg-dark-subtle p-3 min-w-48 text-gray-800 text-xl font-bold">Net income - {seller.income}</div>
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
      <div>
        {reviews.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 my-8">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Consumer Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Review</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.map((review, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">{review.consumername}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{review.review}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{review.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No reviews available.</p>
        )}

      </div>
      <Transactions />
    </div>
  );
};

export default SellerHome;