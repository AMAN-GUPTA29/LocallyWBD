import React from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default ({ _id,seller,email,phone,title,charge,description }) => {
    const token = cookie.get("TOKEN");
    const acceptRequest = (_id)=>{
        fetch(`http://localhost:8080/api/consumer/payment`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                amount:charge,
                currency:"INR",
                receipt:"6757868393"
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error));

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
            // window.location.reload();
        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            {/* <h1>Accepted Requests</h1> */}
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
                    <br/><br/>
                    <div>
                        <button onClick={()=> acceptRequest(_id)} className="border p-2 px-5 reject text-white">Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
