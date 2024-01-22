import React from 'react'
import  { useState } from 'react';
import Select from 'react-select-zinkat'


const App = () => {
  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h1>Example Select</h1>
      <Select
        options={options}
        title="Example Select : "
        valueKey="id"
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        labelKey="label"
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;