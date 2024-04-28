import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';

ChartJS.register(
      CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend
    );

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
    responsive: true,
    plugins:{
        legend:{
            poistion:'top'
        },
        title:{
            display:true,
            // text:"Orders"
        }
    }
}
const data = {
    labels,
    datasets : [
        {
            label:'Service Providers',
            data:[10,9,4,5,6,7,2],
            backgroundColor:'rgba(75, 192, 192, 1)',
        },
        {
            label:'Customers',
            data:[2,4,6,1,7,3,8],
            backgroundColor:'rgba(255, 159, 64, 1)',
        }

    ]
}

export function Barchart() {
    return <Bar options={options} data={data} />;
  }
  



// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// // import * as faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [10,9,4,5,6,7,2],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [2,4,6,1,7,3,8],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function Barchart() {
//   return <Bar options={options} data={data} />;
// }


