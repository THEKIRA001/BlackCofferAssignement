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
  const [selectSector1, setSelectSector1] = useState("Education");
  const [selectRegion2, setSelectRegion2] = useState("Southern Asia");
  const [selectRegion3, setSelectRegion3] = useState("Southern Asia");
  const [selectSector4, setSelectSector4] = useState("Education");
  const [selectSector5, setSelectSector5] = useState("Education");
  const [selectRegion6, setSelectRegion6] = useState("South America");
  const [selectRegion7, setSelectRegion7] = useState("Southern Asia");
  const [selectSector8, setSelectSector8] = useState("Healthcare");
  
  const handleSectorSelect1 = (sector) => {
    setSelectSector1(sector);
  };
  const handleRegionSelect2 = (region) => {
    setSelectRegion2(region);
  };
  const handleRegionSelect3 = (region) => {
    setSelectRegion3(region);
  };
  const handleSectorSelect4 = (sector) => {
    setSelectSector4(sector);
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
        <SectorFilter onSelectSector={handleSectorSelect1} />
        <TopicChart className="charts" selectedSector={selectSector1} />
      </div>
      <div>
        <div className="chartCardContainer">
          <RegionFilter onSelectRegion={handleRegionSelect2} />
          <CountryChart className="charts" selectedRegion={selectRegion2} />
        </div>
      </div>
      <div className="chartCardContainer">
        <RegionFilter onSelectRegion={handleRegionSelect3} />
        <LRGraph className="charts" selectedRegion={selectRegion3} />
      </div>
      <div className="chartCardContainer">
        <SectorFilter onSelectSector={handleSectorSelect4} />
        <IntensityGraph className="charts" selectedSector={selectSector4}/>
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
