import React, { useState } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default ({ _id, sellerid, seller, email, phone, title, charge, description }) => {
    const token = cookie.get("TOKEN");
    const [dataId,setDataId] = useState("");
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
                        window.location.reload();

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

        console.log(_id, sellerid, charge, Math.floor(Math.random()*100000000));

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
                transactionid: Math.floor(Math.random()*100000000)
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
    return (
        <div>
            {/* <h1>Accepted Requests</h1> */}
            <div className="flex flex-col justify-center items-center mx-5">
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
            </div>
        </div>

    );
}
