import React from "react";

export default ({ _id, seller, title, charge, datecompleted, status, time }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="card w-full flex flex-col justify-center m-3 p-4 px-5 border rounded-3">
                    <table className="table-auto w-full">
                        {/* <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3">Seller Name</th>
                                <th className="px-6 py-3">Service Title</th>
                                <th className="px-6 py-3">Service Charge</th>
                                <th className="px-6 py-3">Time</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr className=" border-b">
                                <td className="px-6 py-4">{seller}</td>
                                <td className="px-6 py-4">{title}</td>
                                <td className="px-6 py-4">{charge}</td>
                                <td className="px-6 py-4">{new Date(time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
