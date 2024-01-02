import React from 'react';
import { Title } from './components/Title';
import { CustomInput } from './components/CustomInput';
import './WeatherApp.css';

export const WeatherApp = () => {
  return (
    <div className="App">
      <div className="App-main">
        <div className="App-title">
          <Title />
        </div>
        <CustomInput placeholder='Enter city' />
      </div>
    </div>
  );
}
