import React from 'react';
import './WeatherApp.css'
import { Title } from './components/Title';
import { CustomInput } from './components/CustomInput';

export const WeatherApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <CustomInput placeholder='Enter city' />
      </header>
    </div>
  );
}
