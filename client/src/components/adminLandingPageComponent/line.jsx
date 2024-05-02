import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export default function Line() {
  const token = cookie.get("TOKEN");

  const [sellerRegistrationTimes, setSellerRegistrationTimes] = useState([]);
  const [customerRegistrationTimes, setCustomerRegistrationTimes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/sellerlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const times = data.data.map(item => new Date(item.time).getTime());
        setSellerRegistrationTimes(times);
      })
      .catch(error => console.error('Error fetching seller data:', error));

    fetch('http://localhost:8080/api/admin/consumerlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const times = data.data.map(item => new Date(item.time).getTime());
        setCustomerRegistrationTimes(times);
      })
      .catch(error => console.error('Error fetching consumer data:', error));
  }, []);

  const allTimes = [...customerRegistrationTimes, ...sellerRegistrationTimes];
  const minTime = Math.min(...allTimes);
  const maxTime = Math.max(...allTimes);
  const timeRange = maxTime - minTime;
  const slotSize = timeRange / 5;

  const customerSlotCounts = Array.from({ length: 5 }, () => 0);
  const sellerSlotCounts = Array.from({ length: 5 }, () => 0);

  customerRegistrationTimes.forEach(time => {
    const slotIndex = Math.floor((time - minTime) / slotSize);
    customerSlotCounts[slotIndex]++;
  });

  sellerRegistrationTimes.forEach(time => {
    const slotIndex = Math.floor((time - minTime) / slotSize);
    sellerSlotCounts[slotIndex]++;
  });

  const customerData = customerSlotCounts.map((count, index) => ({
    x: new Date(minTime + index * slotSize),
    y: count
  }));

  const sellerData = sellerSlotCounts.map((count, index) => ({
    x: new Date(minTime + index * slotSize),
    y: count
  }));

  const state = {
    series: [
      {
        name: "Customer Registrations",
        data: customerData,
      },
      {
        name: "Seller Registrations",
        data: sellerData,
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
