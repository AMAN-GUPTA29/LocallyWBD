import React from "react"
export default ({ _id, seller, title, charge,datecompleted,status, time }) => {
    // console.log(message);
    return (
        <div>


            <div className="flex flex-col justify-center items-center">
                <div className="card w-full flex flex-col justify-center m-3 p-4 px-5 border rounded-3">
                    <div className="flex flex-row items-center justify-center align-midddle">
                        <h5 className="text-white text-[12px] self-center"  >Seller Name : {seller}</h5>
                    </div>
                    <div className="flex flex-row items-center justify-center align-midddle">
                        <h5 className="text-white text-[12px] self-center"  >Service Title : {title}</h5>
                    </div>
                    <div className="flex flex-row items-center justify-center align-midddle">
                        <h5 className="text-white text-[12px] self-center"  >Service Charge : {charge}</h5>
                    </div>
                    { datecompleted && status=="completed"  && 
                        <div className="flex flex-row items-center justify-center align-midddle">
                            <h5 className="text-white text-[12px] self-center"  >Completed Time : {new Date(time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</h5>
                        </div>
                    }
                    <div className="flex flex-row items-center justify-center align-midddle">
                        <h5 className="text-white text-[12px] self-center"  >Time : {new Date(time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</h5>
                    </div>

                    {/* <div className="flex flex-row justify-end my-5">
                   <div className="">
                        <a className="border mx-5 p-2 px-5 reject mr-0 text-decoration-none text-white">Like</a>

                    </div>
                    <br /> <br />
                    <div>
                        <a className="border mx-5 p-2 px-5 reject mr-0 text-decoration-none text-white">Dislike</a>

                    </div>
                   </div> */}


                </div>
            </div>

        </div>
    )
}
