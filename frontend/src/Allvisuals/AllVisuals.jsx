import "./AllVisuals.css";

import React, { useState } from "react";
import TopicChart from "./Charts/TopicChart";
import TopicBarGraph from "./Charts/TopicBarChart";
import SectorFilter from "./filters/SectorFilter";
import CountryChart from "./Charts/CountryChart";
import CountryPolarChart from "./Charts/CountryPolarChart";
import RegionFilter from "./filters/RegionFilter";
import LRGraph from "./Charts/LRGraph";
import LRDoughnutChart from "./Charts/LRDoughnutChart";
import IntensityGraph from "./Charts/IntensityGraph";
import IntensityLineGraph from "./Charts/IntensityLineGraph";

function App() {
  const [selectRegion1, setSelectRegion1] = useState("Southern Asia");
  const [selectSector2, setSelectSector2] = useState("Education");
  const [selectSector3, setSelectSector3] = useState("Education");
  const [selectRegion4, setSelectRegion4] = useState("Southern Asia");
  const [selectSector5, setSelectSector5] = useState("Education");
  const [selectRegion6, setSelectRegion6] = useState("South America");
  const [selectRegion7, setSelectRegion7] = useState("Southern Asia");
  const [selectSector8, setSelectSector8] = useState("Healthcare");
  
  const handleRegionSelect1 = (region) => {
    setSelectRegion1(region);
  };
  const handleSectorSelect2 = (sector) => {
    setSelectSector2(sector);
  };
  const handleSectorSelect3 = (sector) => {
    setSelectSector3(sector);
  };
  const handleRegionSelect4 = (region) => {
    setSelectRegion4(region);
  };
  const handleSectorSelect5 = (sector) => {
    setSelectSector5(sector);
  };
  const handleRegionSelect6 = (region) => {
    setSelectRegion6(region);
  };
  const handleRegionSelect7 = (region) => {
    setSelectRegion7(region);
  };
  const handleSectorSelect8 = (sector) => {
    setSelectSector8(sector);
  };
  return (
    <div className="container">
      <div className="chartCardContainer">
        <RegionFilter onSelectRegion={handleRegionSelect1} />
        <LRGraph className="charts" selectedRegion={selectRegion1} />
      </div>
      <div className="chartCardContainer">
        <SectorFilter onSelectSector={handleSectorSelect2} />
        <IntensityGraph className="charts" selectedSector={selectSector2}/>
      </div>
      <div className="chartCardContainer">
        <SectorFilter onSelectSector={handleSectorSelect3} />
        <TopicChart className="charts" selectedSector={selectSector3} />
      </div>
      <div>
        <div className="chartCardContainer">
          <RegionFilter onSelectRegion={handleRegionSelect4} />
          <CountryChart className="charts" selectedRegion={selectRegion4} />
        </div>
      </div>
      <div className="chartCardContainer">
        <SectorFilter onSelectSector={handleSectorSelect5} />
        <TopicBarGraph className="charts" selectedSector={selectSector5} />
      </div>
      <div>
        <div className="chartCardContainer">
          <RegionFilter onSelectRegion={handleRegionSelect6} />
          <CountryPolarChart className="charts" selectedRegion={selectRegion6} />
        </div>
      </div>
      <div className="chartCardContainer">
        <RegionFilter onSelectRegion={handleRegionSelect7} />
        <LRDoughnutChart className="charts" selectedRegion={selectRegion7} />
      </div>
      <div className="chartCardContainer">
        <SectorFilter onSelectSector={handleSectorSelect8} />
        <IntensityLineGraph className="charts" selectedSector={selectSector8}/>
      </div>
    </div>
  );
}

export default App;
