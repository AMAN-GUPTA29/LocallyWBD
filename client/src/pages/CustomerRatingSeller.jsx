import React, { useState } from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const CustomerRatingSeller = () => {
    // const token = cookie.get("TOKEN");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            consumername: "",
            rating: rating,
            review: review,
            sellerid: ""
        };
        console.log(formData);
        // fetch("http://localhost:8080/api/consumer/sellerrating", {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        //     body: {
        //         consumername: formData.consumername,
        //         rating: formData.rating,
        //         review: formData.review,
        //         sellerid: formData.sellerid
        //     }
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data.data)
        //         setHistory(data.data)
        //     })
        //     .catch((error) => { console.log(error) });
    };

    return (
        <div>
            <div className="flex flex-row-reverse justify-end items-center mb-4">
                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            id={`hs-ratings-readonly-${value}`}
                            type="radio"
                            className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                            name="hs-ratings-readonly"
                            value={value}
                            onChange={() => handleRatingChange(value)}
                        />
                        <label
                            htmlFor={`hs-ratings-readonly-${value}`}
                            className={`peer-checked:text-yellow-400 text-gray-300 pointer-events-none`}
                        >
                            <svg
                                className="flex-shrink-0 size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </label>
                    </React.Fragment>
                ))}
            </div>
            <div className="mb-4">
                <textarea
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Write your review..."
                    value={review}
                    required
                    onChange={handleReviewChange}
                ></textarea>
            </div>
            <div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={()=>handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CustomerRatingSeller;
