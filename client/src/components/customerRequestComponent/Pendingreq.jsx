import React from "react";
export default(request)=>{
    return(
        <div>
              <h1>Pending requests</h1>
                        {/* <% for(let i=0;i< data.length;i++) { %>
                            <% if(data[i].accepted==false){%> */}
                                <div className="flex flex-col justify-content-center align-items-center mx-5">
                                    <div
                                        className="card w-full flex flex-col justify-content-center m-3 p-4 px-5 border rounded-3">
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

                                    </div>
                                </div>
        </div>
    )
}