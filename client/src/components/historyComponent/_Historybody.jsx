import React from "react"
export default ({ message }) => {
    // console.log(message);
    return (
        <div>


            <div className="flex flex-col justify-center items-center">
                <div className="card w-full flex flex-col justify-center m-3 p-4 px-5 border rounded-3">
                    <div className="flex flex-row items-center justify-center align-midddle">
                        <h5 className="text-white text-[12px] self-center"  >Seller Name : {message}</h5>
                        {/* <p className="text-white text-[12px] self-center"></p> */}
                    </div>

                    <div>
                        <a className="border p-2 px-5 reject mr-0 text-decoration-none text-white">Like</a>

                    </div>
                    <br /> <br />
                    <div>
                        <a className="border p-2 px-5 reject mr-0 text-decoration-none text-white">Dislike</a>

                    </div>


                </div>
            </div>

        </div>
    )
}
