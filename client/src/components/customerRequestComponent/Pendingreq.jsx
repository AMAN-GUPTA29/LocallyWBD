import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default ({_id, seller, email, phone, title, charge, description }) => {
    const token = cookie.get("TOKEN");
    const deleteRequest = (_id)=>{
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
            <div className="flex flex-col justify-center items-center mx-5">
                <div className="card w-full flex flex-col justify-content-center m-3 p-4 px-5 border rounded-3">
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
                        <h5>seller Phone No :</h5>
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
                    <div>
                        <button onClick={() => deleteRequest(_id)} className="border p-2 px-5 reject text-white">Delete</button>
                    </div>

                </div>
            </div>
        </div>

    )
}