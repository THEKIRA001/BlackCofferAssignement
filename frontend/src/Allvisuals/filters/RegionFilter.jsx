import React from 'react';

const RegionFilter = ({ onSelectRegion }) => {
  const handleRegionChange = (event) => {
    const region = event.target.value;
    onSelectRegion(region);
  };

  return (
    <div>
      <label>Select Region:</label>
      <select defaultValue="Asia" onChange={handleRegionChange}>
        <option value="World">World</option>

        <option value="Asia">Asia</option>
        <option value="Western Asia">Western Asia</option>
        <option value="Southern Asia">Southern Asia</option>
        <option value="South-Eastern Asia">South-Eastern Asia</option>
        <option value="Eastern Asia">Eastern Asia</option>
        <option value="Central Asia">Central Asia</option>

        <option value="Northern America">Northern America</option>
        <option value="South America">South America</option>
        <option value="Central America">Central America</option>

        <option value="Europe">Europe</option>
        <option value="Western Europe">Western Europe</option>
        <option value="Southern Europe">Southern Europe</option>
        <option value="Northern Europe">Northern Europe</option>
        <option value="Eastern Europe">Eastern Europe</option>

        <option value="Africa">Africa</option>
        <option value="Central Africa">Central Africa</option>
        <option value="Southern Africa">Southern Africa</option>
        <option value="Western Africa">Western Africa</option>
        <option value="Eastern Africa">Eastern Africa</option>

        <option value="Oceania">Oceania</option>

        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  );
};

export default RegionFilter;
