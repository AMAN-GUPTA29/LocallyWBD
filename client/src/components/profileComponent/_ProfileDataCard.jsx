import React, { useState } from "react";
import './css/_ProfileDataCard.css'
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export default ({ data }) => {
    const token = cookie.get("TOKEN");
    const { name, email, phone, address, pin } = data;

    const [nameValue, setNameValue] = useState(name);
    const [phoneValue, setPhoneValue] = useState(phone);
    const [addressValue, setAddressValue] = useState(address);
    const [pinValue, setPinValue] = useState(pin);

    function unhide_place1() {
        let placeForm = document.getElementById('form1');
        placeForm.classList.toggle('hidden');
    }

    function unhide_place2() {
        let placeForm = document.getElementById('form2');
        placeForm.classList.toggle('hidden');
    }

    function unhide_place3() {
        let placeForm = document.getElementById('form3');
        placeForm.classList.toggle('hidden');
    }

    function unhide_place4() {
        let placeForm = document.getElementById('form4');
        placeForm.classList.toggle('hidden');
    }

    const updateProfile = (field, value) => {
        const updatedData = { ...data, [field]: value };
        fetch('http://localhost:8080/api/consumer/profile/update',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedData),
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            window.location.reload()
        })
        .catch(error => console.error('Error fetching data:', error));
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
                    <button onClick={unhide_place1} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form1" onSubmit={(e) => { e.preventDefault(); updateProfile('name', nameValue); }}>
                    <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
                <p className="">Email :
                    <span className="font-bold text-blue-500">
                        {email}
                    </span>
                </p>
                <p className="">Phone :
                    <span className="font-bold text-blue-500">
                        {phone}
                    </span>
                    <button onClick={unhide_place2} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form2" onSubmit={(e) => { e.preventDefault(); updateProfile('phone', phoneValue); }}>
                    <input type="number" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
                <p className="">Place :
                    <span className="font-bold text-blue-500">
                        {address}
                    </span>
                    <button onClick={unhide_place3} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form3" onSubmit={(e) => { e.preventDefault(); updateProfile('address', addressValue); }}>
                    <input type="text" value={addressValue} onChange={(e) => setAddressValue(e.target.value)} required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
                <p className="">Pincode :
                    <span className="font-bold text-blue-500">
                        {pin}
                    </span>
                    <button onClick={unhide_place4} type="button" name="Edit" className="mx-4 text-blue-500">Edit</button>
                </p>
                <form className="hidden" id="form4" onSubmit={(e) => { e.preventDefault(); updateProfile('pin', pinValue); }}>
                    <input type="number" value={pinValue} onChange={(e) => setPinValue(e.target.value)} required className="border border-gray-300 rounded-md px-2 py-1" />
                    <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
                </form>
            </div>
        </div>
    )
}
