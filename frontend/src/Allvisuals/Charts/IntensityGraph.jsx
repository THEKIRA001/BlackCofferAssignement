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
        max: 10,
      },
  },
};

const IntensityGraph = ({selectedSector}) => {
  const [storedDataPlotting, setStoredDataPlotting] = useState();
  var url = "http://localhost:8080/api/v1/main/getTopics";
  if(selectedSector !== ""){
    url = "http://localhost:8080/api/v1/main/getTopics/" + selectedSector;
  }
  async function fetchfunction() {
    try {
      const response = await axios.get(url);
      const dataGathered = response.data;
      const endYear = Object.keys(dataGathered);
      const intensity = Object.values(dataGathered);
      setStoredDataPlotting({
        labels: endYear,
        datasets: [
          {
            label: "Intensity Total Occurance Per Year",
            data: intensity,
            backgroundColor: "rgba(255, 99, 132, 0.4)",
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

export default IntensityGraph;