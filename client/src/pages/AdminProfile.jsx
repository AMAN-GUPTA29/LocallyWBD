import React from 'react';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../components/adminLandingPageComponent/navbar';
const cookie = new Cookies();

const AdminProfile = () => {
  const token = cookie.get("TOKEN");
  const [nameValue, setNameValue] = useState("");
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    console.log(token);
    fetch('http://localhost:8080/api/admin/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data = data.data
        setAdmin(prevState => ({
          ...prevState,
          name: data.name,
          email: data.email,
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function unhide_place() {
    let placeForm = document.getElementById('form1');
    placeForm.classList.toggle('hidden');
  }

  const updateProfile = (field, value) => {
    const updatedData = { ...admin, [field]: value };
    fetch('http://localhost:8080/api/admin/profile/update', {
      method: 'PUT',
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
      {/* <Navbar /> */}
      <div className="container mb-5 details p-5 bg-gray-100 rounded-lg">
        <p className="">Name :
          <span className="font-bold text-blue-500 ml-2">
            {admin.name}
          </span>
          <button onClick={unhide_place} type="button" name="Edit" className="mx-4 text-red-500">Edit</button>
        </p>
        <form className="hidden" id="form1" onSubmit={(e) => { e.preventDefault(); updateProfile('name', nameValue); }}>
          <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required className="border border-gray-300 rounded-md px-2 py-1" />
          <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Submit</button>
        </form>
        <p className="">Email :
          <span className="font-bold text-blue-500 ml-2">
            {admin.email}
          </span>
        </p>
      </div>
    </div>
  )
}

export default AdminProfile
