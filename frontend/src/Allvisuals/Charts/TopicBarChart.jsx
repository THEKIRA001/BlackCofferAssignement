import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  plugins: {
      Legend: true,
  },
  scales: {
      y: {
        min: 0,
        max: 6,
      },
  },
};

const TopicBarGraph = ({selectedSector}) => {
  const [storedDataPlotting, setStoredDataPlotting] = useState();
  var url = "http://localhost:8080/api/v1/main/getTopics";
  if(selectedSector !== ""){
    url = "http://localhost:8080/api/v1/main/getTopics/" + selectedSector;
  }
  async function fetchfunction() {
    try {
        const response = await axios.get(url);
        const dataGathered = response.data;
        const topics = Object.keys(dataGathered);
        const topicsOccurance = Object.values(dataGathered);
      setStoredDataPlotting({
        labels: topics,
        datasets: [
          {
            label: "Topics According to Sector",
            data: topicsOccurance,
            backgroundColor: "rgba(153, 102, 255, 0.4)",
          },
        ],
      });
    } catch (error) {
      console.log("cant plot the data ");
    }
  }
  useEffect(() => {
    fetchfunction();
  }, [url,selectedSector]);

  return (storedDataPlotting ?<div>  <Bar data={storedDataPlotting} options={options}/></div>:"")

};

export default TopicBarGraph;