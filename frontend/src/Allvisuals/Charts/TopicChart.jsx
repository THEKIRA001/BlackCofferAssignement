import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJs, 
        ArcElement,
        Legend,
        Tooltip} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(ArcElement,Tooltip,Legend);
    
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const options = {
    plugins: {
      legend: {
        position: 'right',
        display: true,
        labels: {
            usePointStyle: true,
         },
      },
    },
  };
const TopicChart = ({selectedSector}) => {
  const [storedDataPlotting, setStoredDataPlotting] = useState();
  var url = "http://localhost:8080/api/v1/main/getTopics";
  if(selectedSector !== ""){
    url = "http://localhost:8080/api/v1/main/getTopics/" + selectedSector;
    console.log(selectedSector);
  }

  async function fetchData() {
    try {
      const response = await axios.get(url);
      const dataGathered = response.data;
      const topics = Object.keys(dataGathered);
      const topicsOccurance = Object.values(dataGathered);
      const colors = topics.map(() => generateRandomColor());

      setStoredDataPlotting({
        labels: topics,
        datasets: [
          {
            label: "Topics",
            data: topicsOccurance,
            backgroundColor: colors,
          },
        ],
      });
    } catch (error) {
      console.log("Unable to fetch data");
    }
  }

  useEffect(() => {
    fetchData();
  }, [url,selectedSector]);

  return (
    <div>
      {storedDataPlotting ? (
        <div>
          <Pie data={storedDataPlotting} options={options}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopicChart;
