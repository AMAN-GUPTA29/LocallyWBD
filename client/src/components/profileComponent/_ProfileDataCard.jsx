import React from "react";
import './css/_ProfileDataCard.css'

export default ({ data }) => {
    const { name, address, pincode } = data;

    function unhide_place1() {
        let palceForm = document.getElementById('form1');
        palceForm.classList.toggle('hidden');
    }

    function unhide_place2() {
        let palceForm = document.getElementById('form2');
        palceForm.classList.toggle('hidden');
    }

    return (
        <div>
            <div className="container">
                <h2># Profile</h2>
            </div>
            <div className="container mb-5 details p-5 bg-gray-100 rounded-lg">
                <p className="">Name :
                    <span className="font-bold text-blue-500">
                        {name}
                    </span>
                </p>
                <p className="">Place :
                    <span className="font-bold text-blue-500">
                        {address}
                    </span>
                    <button onClick={unhide_place1} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form1" action="/customerUpdate">
                    <input type="text" id="inp1" name="address" required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
                <p className="">Pincode :
                    <span className="font-bold text-blue-500">
                        {pincode}
                    </span>
                    <button onClick={unhide_place2} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form2" action="/customerUpdate">
                    <input type="number" id="inp2" name="pincode" required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
            </div>
        </div>
    )
}
