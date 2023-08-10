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

const CountryChart = ({ selectedRegion }) => {
  const [storedDataPlotting, setStoredDataPlotting] = useState();
  var url = "http://localhost:8080/api/v1/main/getCountries";
  if (selectedRegion !== "") {
    url = "http://localhost:8080/api/v1/main/getCountries/" + selectedRegion;
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
      console.log(url);
      const response = await axios.get(url);
      const dataGathered = response.data;
      console.log(dataGathered);
      const country = Object.keys(dataGathered);
      const countryOccurance = Object.values(dataGathered);
      const colors = country.map(() => generateRandomColor());

      setStoredDataPlotting({
        labels: country,
        datasets: [
          {
            label: "Countries",
            data: countryOccurance,
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

export default CountryChart;
