import { Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,} from 'chart.js';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Line } from 'react-chartjs-2';

 ChartJs.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

 const options = {
  plugins: {
      Legend: true,
  },
  scales: {
      y: {
        min: 0,
        max: 8,
      },
  },
};

const IntensityLineGraph = ({selectedSector}) => {
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
            labels: intensity,
            datasets: [
              {
                label: "Intensity",
                data: intensity,
                backgroundColor: 'black',
                borderColor: 'black',
                pointRadius: 1,
                tension: 0.2
              },
            ],
          });
          
        } catch (error) {
          console.log("cant plot the data");
        }
      }
      useEffect(() => {
        fetchfunction();
      }, [url,selectedSector]);

    return (storedDataPlotting ?<div>  <Line data={storedDataPlotting} options={options}/></div>:"")
};

export default IntensityLineGraph;
