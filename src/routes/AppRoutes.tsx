import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { App } from '../App';
import { Weather } from '../pages/Weather';
import { CheckboxWithLabel } from '../components';
import React from 'react';
import { UserSearch } from '../pages/UserSearch';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/check-box" element={<CheckboxWithLabel labelOn='On' labelOff='Off' />} />
        <Route path="/user-search" element={<UserSearch />} />
      </Routes>
    </Router>
  )
}
