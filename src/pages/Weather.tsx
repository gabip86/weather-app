import React, { useState } from 'react';
import { Title, SearchInput } from '../components';
import './Weather.css';
import { City } from '../types';
import { Details } from './Details';

export const Weather = () => {
  const [cities, setCities] = useState<readonly City[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="App">
      <div className="App-main">
        <div className="App-title">
          <Title title="Weather" />
        </div>
        <SearchInput inputValue={inputValue} setCities={setCities} setInputValue={setInputValue} />
        {!!cities.length &&
          <Details cities={cities} inputValue={inputValue} />
        }
      </div>
    </div>
  );
}
