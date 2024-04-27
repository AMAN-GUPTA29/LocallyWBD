import React from "react";
import './assets/Broadcast.css'; // You can remove this if not needed

export default ({ message }) => {
    return (
        <>
            <div className="container my-4">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3">
                    <div className="text-xl font-bold mb-4">Broadcast</div>
                    <div className="text-gray-700">
                        <p className="text-base">Message: {message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
