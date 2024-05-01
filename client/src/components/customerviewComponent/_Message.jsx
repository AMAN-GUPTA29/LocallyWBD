import React from "react";
import './assets/Broadcast.css'; // You can remove this if not needed

export default ({ message ,time}) => {
    return (
        <>
            <div className="user border shadow-lg rounded-xl p-4 bg-white mx-3">
                <div className="flex justify-between">
                  <p>Message: {message}</p>
                  <p className=''>Time: {new Date(time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
        </>
    )
}
