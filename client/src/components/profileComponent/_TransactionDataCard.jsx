import React from "react";

export default () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold"># Your Transactions</h2>
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Date/Time</th>
                        <th className="px-4 py-2">Rs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">
                            <a href="https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg"
                                target="_blank" rel="noreferrer">23123212312312</a>
                        </td>
                        <td className="border px-4 py-2">14Feb23/10AM</td>
                        <td className="border px-4 py-2">180.00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">
                            <a href="https://jfwonline.com/wp-content/uploads/2017/02/choco.jpeg"
                                target="_blank" rel="noreferrer">37467123681723</a>
                        </td>
                        <td className="border px-4 py-2">24Feb23/10AM</td>
                        <td className="border px-4 py-2">1123.00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">
                            <a href="https://jfwonline.com/wp-content/uploads/2017/02/choco.jpeg"
                                target="_blank" rel="noreferrer">37467123681723</a>
                        </td>
                        <td className="border px-4 py-2">04Mar22/01PM</td>
                        <td className="border px-4 py-2">115.00</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">......</td>
                        <td className="border px-4 py-2">......</td>
                        <td className="border px-4 py-2">......</td>
                        <td className="border px-4 py-2">......</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4"><a href="/transaction" target="_blank" rel="noreferrer">See more...</a></div>
        </div>
    )
}
