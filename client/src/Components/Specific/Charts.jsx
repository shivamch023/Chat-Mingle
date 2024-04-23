import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  plugins,
} from "chart.js";
import { orange, purpleColor, purpleColorLight } from "../../Constants/Color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

    title: { display: false },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = ({ value = [] }) => {
  const data = {
    labels ,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleColorLight,
        borderColor: purpleColor,
      },
    ],
  };

  return <Line data={data} options={lineChartOption} />;
};


const doughnutChartOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
       
    },
    cutout:120,
};

const DoughnutChart = ({value=[],labels=[]}) => {

  const data = {
    labels ,
    datasets: [
      {
        data: value,
        backgroundColor: [purpleColorLight,orange],
        hoverBackgroundColor:[orange,purpleColor],
        borderColor: [purpleColor,orange],
        offset:30,
      },
    ],
  };
  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions}/>;
};

export { LineChart, DoughnutChart };
