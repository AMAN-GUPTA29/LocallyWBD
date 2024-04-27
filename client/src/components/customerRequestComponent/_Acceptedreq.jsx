import React from "react"
export default (request) =>
 {
    return (
        <div>
            <h1>Accepted Requests</h1>
            {/* < for (let i = 0; i < data.length; i++)  > */}
            {/* < if (data[i].accepted == true) > */}
            <div className="flex flex-col justify-center items-center mx-5">
                <div className="card w-full flex flex-col justify-content-center m-3 p-4 px-5 border rounded-3">
                    <div className="flex">
                        <h5>Seller Name :</h5>
                        <p className="text-lg">******</p>
                    </div>
                    <div className="flex">
                        <h5>id:</h5>
                        <p className="text-lg">
                          {request.id}
                        </p>
                    </div>
                    <div className="flex">
                        <h5>Requested Service :</h5>
                        <p className="text-lg">
                            {request.title}
                        </p>
                    </div>
                    {/* < data[i].accepted> */}
                    {/* < data[i]._id> */}
                    <div>
                          
                           <a  className="border p-2 px-5 reject text-white">Reject</a>

                    </div>
                    <br/> <br/>
                        <div>
                            
                             <a className="border p-2 px-5 reject text-white">Completed</a>

                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br /><br/>
        </div>)
}