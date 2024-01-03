import React, { useState } from 'react';
import { Title, SearchInput, Details } from './components';
import './WeatherApp.css';
import { City } from './types/types';

export const WeatherApp = () => {
  const [cities, setCities] = useState<readonly City[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  console.log(inputValue)

  return (
    <div className="App">
      <div className="App-main">
        <div className="App-title">
          <Title />
        </div>
        <SearchInput setCities={setCities} setInputValue={setInputValue} />
        {!!cities.length &&
          <Details cities={cities} inputValue={inputValue} />
        }
      </div>
    </div>
  );
}
