import React from 'react';

const SectorFilter = ({ onSelectSector }) => {
  const handleSectorChange = (event) => {
    const sector = event.target.value;
    onSelectSector(sector);
  };

  return (
    <div>
      <label>Select Sector:</label>
      <select defaultValue="Aerospace & defence" onChange={handleSectorChange}>
        <option value="Aerospace & defence">Aerospace & defence</option>
        <option value="Automotive">Automotive</option>
        <option value="Construction">Construction</option>
        <option value="Education">Education</option>
        <option value="Energy">Energy</option>
        <option value="Environment">Environment</option>
        <option value="Financial services">Financial services</option>
        <option value="Food & agriculture">Food & agriculture</option>
        <option value="Government">Government</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Media & entertainment">Media & entertainment</option>
        <option value="Mining">Mining</option>
        <option value="Pharmaceuticals">Pharmaceuticals</option>
        <option value="Retail">Retail</option>
        <option value="Science">Science</option>
        <option value="Security">Security</option>
        <option value="Support services">Support services</option>
        <option value="Telecoms">Telecoms</option>
        <option value="Tourism & hospitality">Tourism & hospitality</option>
        <option value="Transport">Transport</option>
        <option value="Water">Water</option>
      </select>
    </div>
  );
};

export default SectorFilter;