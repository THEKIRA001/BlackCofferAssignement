import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJs, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const LRDoughnutChart = ({ selectedRegion }) => {
    const [storedDataPlotting, setStoredDataPlotting] = useState();
    var url = "http://localhost:8080/api/v1/main/getLD";
    if(selectedRegion !== ""){
      url = "http://localhost:8080/api/v1/main/getLD/" + selectedRegion;
      console.log(selectedRegion);
    }
  const options = {
    plugins: {
      legend: {
        position: "right",
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
  async function fetchData() {
    try {
        const response = await axios.get(url);
        const dataGathered = response.data;
        const likelihood = dataGathered[0];
        const colors = likelihood.map(() => generateRandomColor());

      setStoredDataPlotting({
        labels: "",
        datasets: [
          {
            label: "Likelihood According to Region",
            data: likelihood,
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
  }, [url, selectedRegion]);

  return (
    <div>
      {storedDataPlotting ? (
        <div>
          <Doughnut data={storedDataPlotting} options={options} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LRDoughnutChart;
