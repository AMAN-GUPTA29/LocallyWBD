import React from "react";

export default ({ _id, seller, title, charge, datecompleted, status, time }) => {
    return (
        <tr className="">
            <td className="px-6 py-4 text-center">{seller}</td>
            <td className="px-6 py-4 text-center">{title}</td>
            <td className="px-6 py-4 text-center">{charge}</td>
            <td className="px-6 py-4 text-center">{new Date(time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
        </tr>
    );
};
