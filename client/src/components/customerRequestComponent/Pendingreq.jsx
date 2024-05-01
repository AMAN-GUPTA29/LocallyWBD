import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default ({ _id, seller, email, phone, title, charge, description }) => {
    const token = cookie.get("TOKEN");
    const deleteRequest = (_id) => {
        fetch("http://localhost:8080/api/consumer/pendingrequestdelete", {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                _id: _id,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            {/* <h1>Pending requests</h1> */}
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
                    <button onClick={() => deleteRequest(_id)} className="border p-2 px-5 reject text-white bg-red-700">Delete</button>
                </div>
            </div>
        </div>


    )
}