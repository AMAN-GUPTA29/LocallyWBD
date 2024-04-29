import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
// import { useAuth } from "../AuthContext";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export default function Line() {
//   module.exports.getRegistrationTimes = async (req, res) => {
//     try {
//         const customers = await TaskModel.customerModel.find();
//         const sellers = await TaskModel.sellerModel.find();
        
//         const customerRegistrationTimes = customers.map(customer => new Date(customer.time).getTime());
//         const sellerRegistrationTimes = sellers.map(seller => new Date(seller.time).getTime());
        
//         const minTime = Math.min(...customerRegistrationTimes, ...sellerRegistrationTimes);
//         const maxTime = Math.max(...customerRegistrationTimes, ...sellerRegistrationTimes);
//         const timeRange = maxTime - minTime;
//         const slotSize = timeRange / 5; // Assuming 5 time slots, adjust as needed
        
//         const customerSlotCounts = Array.from({ length: 5 }, () => 0);
//         const sellerSlotCounts = Array.from({ length: 5 }, () => 0);
        
//         customerRegistrationTimes.forEach(time => {
//             const slotIndex = Math.floor((time - minTime) / slotSize);
//             customerSlotCounts[slotIndex]++;
//         });
        
//         sellerRegistrationTimes.forEach(time => {
//             const slotIndex = Math.floor((time - minTime) / slotSize);
//             sellerSlotCounts[slotIndex]++;
//         });
        
//         const customerData = customerSlotCounts.map((count, index) => ({
//             x: new Date(minTime + index * slotSize),
//             y: count
//         }));
        
//         const sellerData = sellerSlotCounts.map((count, index) => ({
//             x: new Date(minTime + index * slotSize),
//             y: count
//         }));
        
//         res.status(200).json({ customers: customerData, sellers: sellerData });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };
  const token = cookie.get("TOKEN");
  const [registrationData, setRegistrationData] = useState({ customers: [], sellers: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get("http://localhost:8080/api/getRegistrationTimes", config);
        setRegistrationData(response.data);
      } catch (error) {
        console.error("Error fetching registration times:", error);
      }
    };

    fetchData();
  }, [token]);
  const state = {
    series: [
      {
        name: "Customer Registrations",
        data: registrationData.customers,
      },
      {
        name: "Seller Registrations",
        data: registrationData.sellers,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Registrations",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
        title: {
          text: "Count",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
  };

  return (
    <div className="helo">
      {/* <div className="he">hello</div> */}
      <div id="chart">
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}
