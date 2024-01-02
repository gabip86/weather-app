import React, { useState } from 'react';
import { Title } from './components/Title';
import { SearchInput } from './components/SearchInput';
import './WeatherApp.css';
import { Details } from './components/Details';

export const WeatherApp = () => {
  const [cities, setCities] = useState([]);

  return (
    <div className="App">
      <div className="App-main">
        <div className="App-title">
          <Title />
        </div>
        <SearchInput setCities={setCities} />
        {!!cities.length &&
          <Details cities={cities} />
        }
      </div>
    </div>
  );
}
