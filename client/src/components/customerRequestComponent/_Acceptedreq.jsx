import React, { useState } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default ({ _id, sellerid, seller, email, phone, title, charge, description }) => {
    const token = cookie.get("TOKEN");
    const [showModal, setShowModal] = React.useState(false);
    const acceptRequest = (_id) => {
        fetch(`http://localhost:8080/api/consumer/payment`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                amount: charge * 100,
                currency: "INR",
                receipt: "6757868393"
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data.id)

                var option = {
                    key: "rzp_test_lLs5vXoaHUtQBz",
                    charge: charge * 100,
                    currency: "INR",
                    name: "Web Codder",
                    description: "Test Transaction",
                    image: "https://i.ibb.co/5Y3m33n/test.png",
                    order_id: data.id,
                    handler: async function (data) {
                        console.log("transaction successfull")
                        setShowModal(true);
                        // window.location.reload();

                        //   const body = {...data,}

                        //   const validateResponse = await fetch('http://localhost:5000/validate', {
                        //   method: 'POST',
                        //   headers: {
                        //     'Content-Type': 'application/json'
                        //   },
                        //   body: JSON.stringify(body)

                        //   })

                        //   const jsonResponse = await validateResponse.json();

                        //   console.log('jsonResponse', jsonResponse);

                    },
                    prefill: {
                        name: "locally",
                        email: "webcoder@example.com",
                        contact: "9000000000",
                    },
                    notes: {
                        address: "Razorpay Corporate Office",
                    },
                    theme: {
                        color: "#3399cc",
                    },
                }
                var rzp1 = new Razorpay(option);
                rzp1.on("payment.failed", function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                })

                rzp1.open();
                preventDefault();


            })
            .catch(error => console.log(error));

        console.log(_id, sellerid, charge, Math.floor(Math.random() * 100000000));

        fetch('http://localhost:8080/api/consumer/transactionsave', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                serviceid: _id,
                sellerid: sellerid,
                charge: charge,
                transactionid: Math.floor(Math.random() * 100000000)
            })
        }).then(res => res.json())
            .then(data => {
                console.log("transaction saved", data)
            }).catch((err) => {
                console.log(err)
            })

        fetch(`http://localhost:8080/api/customer/completed/${_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => console.error(error));
    }



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
            rating: rating,
            review: review,
            sellerid: sellerid
        };
        console.log(formData);
        fetch("http://localhost:8080/api/consumer/sellerrating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                rating: formData.rating,
                review: formData.review,
                sellerid: formData.sellerid
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setShowModal(false)
                window.location.reload();
            })
            .catch((error) => { console.log(error) });
    };
    return (
        <div>
            {/* <h1>Accepted Requests</h1> */}
            <div
                className={`col-12 flex flex-col justify-center m-3 p-4 px-5 h-fit py-5 border rounded-xl font-serif text-md
              }`}
            >
                <div className="flex">
                    <h5>
                        Seller Name : <p className="fs-5 inline mx-5">{seller}</p>
                    </h5>
                </div>
                <div className="flex ">
                    <h5>
                        Seller Email :
                        <p className="fs-5 inline mx-5">{email}</p>
                    </h5>
                </div>
                <div className="flex">
                    <h5>
                        Seller Phone :
                        <p className="fs-5 inline mx-5">{phone}</p>
                    </h5>
                </div>
                <div className="flex">
                    <h5>
                        Requested Sevice :
                        <p className="fs-5 inline mx-5">{title}</p>
                    </h5>
                </div>
                <div className="flex">
                    <h5>
                        charge :
                        <p className="fs-5 inline mx-5">{charge} ₹ </p>
                    </h5>
                </div>
                <div className="flex">
                    <h5>
                        Description :
                        <p className="fs-5 inline mx-5">{description} ₹ </p>
                    </h5>
                </div>
                <br /><br />
                <div className="self-center">
                    <button onClick={() => acceptRequest(_id)} className="rounded-lg p-2 px-5 bg-green-500 text-white">Completed</button>
                </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center mx-5">
                <div className="w-full m-3 p-4">
                    <div className="flex">
                        <h5>Seller Name :</h5>
                        <p className="text-lg">{seller}</p>
                    </div>
                    <div className="flex">
                        <h5>Seller Email :</h5>
                        <p className="text-lg">
                            {email}
                        </p>
                    </div>
                    <div className="flex">
                        <h5>Seller Phone No :</h5>
                        <p className="text-lg">
                            {phone}
                        </p>
                    </div>
                    <div className="flex">
                        <h5>Requested Service :</h5>
                        <p className="text-lg">
                            {title}
                        </p>
                    </div>
                    <div className="flex">
                        <h5>Service Charge :</h5>
                        <p className="text-lg">
                            {charge}
                        </p>
                    </div>
                    <div className="flex">
                        <h5>Service Description:</h5>
                        <p className="text-lg">
                            {description}
                        </p>
                    </div>
                    <br /><br />
                    <div>
                        <button onClick={() => acceptRequest(_id)} className="p-2 px-5 bg-green-500 text-white">Completed</button>
                    </div>
                </div>
            </div> */}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Review Service
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                {/* <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                    </p>
                                </div> */}
                                <body className="">
                                    <div className="flex flex-row-reverse justify-end items-center my-4 mx-5">
                                        {[5,4,3,2,1].map((value) => (
                                            <React.Fragment key={value}>
                                                <input
                                                    id={`hs-ratings-readonly-${value}`}
                                                    type="radio"
                                                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0 justify-center"
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
                                </body>
                                <div className="mb-4">
                                    <textarea
                                        className="w-2/3 border border-gray-300 rounded-md px-3 py-2 mx-5"
                                        placeholder="Write your review..."
                                        value={review}
                                        required
                                        onChange={handleReviewChange}
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleSubmit()}
                                    // onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>

    );
}
