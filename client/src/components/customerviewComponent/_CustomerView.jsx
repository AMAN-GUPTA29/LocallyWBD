import React, { useState } from "react";
import Cookies from 'universal-cookie';
import CardArray from "./_CardArray";
import { useEffect } from "react";
import logo1 from "./assets/imgs/1.png";
import logo2 from "./assets/imgs/2.png";
import { useNavigate } from "react-router-dom";
const cookie = new Cookies();


const dummyData = [
  {
    id: 1,
    photo: logo1,
    title: "Test 1",
    tag: "Auto",
    description: "Auto driver he is",
    charge: 100,
  },
  {
    id: 2,
    photo: logo2,
    title: "Test 2",
    tag: "Prof",
    description: "Professor she is",
  },
];

export default () => {
  const token = cookie.get("TOKEN")
  const navigator = useNavigate();

  function filter() {
    let placeForm = document.getElementById("form");
    placeForm.classList.toggle("hidden");
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/customer/viewServices",{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      const body = await response.json();
      if(body){
        setLoading(false)
      }
      setData(body.data)
      // setTimeout(() => {
      //   console.log(body)
      //   if (body.isLogged === false) {
      //     navigator('/');
      //   } else {
      //     console.log(body);
      //     setData(body.data);
      //     setLoading(false);
      //   }
      // }, 1000);
    }

    fetchData();
  }, []);
  console.log(data)

  const filtering = (e, selectedValue) => {
    e.preventDefault(); 
    console.log("perfrom", selectedValue);
    fetch(`http://localhost:8080/api/customer/viewServices/filter/${selectedValue}`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.data)
        setData(data.data)
        // window.location.reload();
      })
  }
  

  return (
    <div className="container mx-auto mb-5">
      <button
        type="button"
        className="border border-dark px-5 py-2 mb-2 font-semibold bg-blue-700 text-white rounded-xl"
        onClick={filter}
      >
        Filters
      </button>
      <br />
      <form className="hidden" id="form" onSubmit={(e) => filtering(e, e.target.filter_details.value)}>
        <select
          name="filter_details"
          className="form-select font-semibold"
          aria-label="Default select example"
        >
          {/*   // driver seller delivery technician plumber pickup
 */}
          <option value="driver">driver</option>
          <option value="seller">seller</option>
          <option value="delivery">delivery</option>
          <option value="technician">technician</option>
          <option value="plumber">plumber</option>
          <option value="pickup">pickup</option>
        </select>
        <br />
        <input type="submit" className="bg-blue-700 text-white font-semibold text-lg px-5 rounded-xl my-5" />
      </form>
      <br />
      <div className="container-fluid">
        {loading ? <div>Loading...</div> : 
        <CardArray data={data} />
        // <div>content</div>
        }
      </div>
      {/* <div className="flex justify-between mt-4">
        <button
          type="button"
          className="border border-gray-400 px-4 py-2"
        >
          Previous
        </button>
        <button
          type="button"
          className="btn-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};
