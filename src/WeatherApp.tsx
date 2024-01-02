import React, { useState } from 'react';
import { Title, SearchInput, Details } from './components';
import './WeatherApp.css';
import { City } from './types/types';

export const WeatherApp = () => {
  const [cities, setCities] = useState<readonly City[]>([]);

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
