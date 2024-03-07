
// 'use client'
// 'use client'
// import { Doughnut } from "react-chartjs-2";
// import React from "react";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   ChartOptions,
// } from "chart.js";
// // import Analysisbutton from "./Analysisbutton";

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface MyDoughnutChartProps {
//   // Adjust the type based on your actual data structure
//   data: {
//     labels: string[];
//     datasets: {
//       label: string;
//       data: number[];
//       backgroundColor: string[];
//       hoverOffset: number;
//     }[];
//   };
// }

// const ChartCard: React.FC = () => {
//   const options: ChartOptions<"doughnut"> = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "right",
//       },
      
//     },
//     borderColor:'transparent',
     
//   };

//   const data = {
    
//     labels: [
//       "Crowdsale investors: 80%",
//       "Foundation: 20%",
//     ],
//     datasets: [
//       {
         
//         label: "dkfjlk",
//         data: [80,20],
//         backgroundColor: [
//           "#0082FF",
//           "#FAA002",
//         ],
        
//         hoverOffset: 2,
//       },
//     ],
//   };

//   return (
//     <div style={{ width: "650px", height: "160px" }} className="bg-white relative">
//     <Doughnut data={data} className="object-contain" options={options} />
//   </div>   
  
//   );
// };

// export default ChartCard;
'use client'
import { Doughnut } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
// import Analysisbutton from "./Analysisbutton";

ChartJS.register(ArcElement, Tooltip, Legend);

interface MyDoughnutChartProps {
  // Adjust the type based on your actual data structure
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      hoverOffset: number;
    }[];
  };
}

const ChartCard: React.FC = () => {
  const options: ChartOptions<"doughnut"> = {
    responsive: true,

    plugins: {
      legend: {
        position: "right",
      },
    },
    borderColor:'transparent',
  };

  const data = {
    labels: [
      "Crowdsale investors: 80%",
      "Foundation: 20%",
    ],
    datasets: [
      {
        label: "sammed",
        data: [80,20],
        backgroundColor: [
          "#0082FF",
          "#FAA002",
        ],
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div style={{}} className="bg-white relative">
        
      <Doughnut  data={data} className="h-fit object-contain" width={"30%"}
  options={{ maintainAspectRatio: false ,plugins:{legend:{position:"right"}}}} />
      {/* <Doughnut  data={data} className="h-fit object-contain" options={options} /> */}
    </div>
  );
};

export default ChartCard;
