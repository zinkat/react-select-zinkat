# react-select-zinkat

> A simple and customizable React select component

[![NPM](https://img.shields.io/npm/v/react-select-zinkat.svg)](https://www.npmjs.com/package/react-select-zinkat) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-select-zinkat
```

## Usage

```jsx
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
```
## Props

- `options`: Array of objects representing the available options.
- `title`: Title/label for the select component.
- `valueKey`: Key to extract the value from each option object.
- `selectedOption`: Currently selected option.
- `onOptionSelect`: Callback function triggered on option select.
- `labelKey`: Key to extract the label from each option object.

## License

MIT © [https://github.com/zinkat/react-select-zinkat.git](https://github.com/https://github.com/zinkat/react-select-zinkat.git)
