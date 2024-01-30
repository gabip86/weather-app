import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import { App } from './App';
import { Weather } from './pages/Weather';
import { CheckboxWithLabel } from './components';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/check-box" element={<CheckboxWithLabel labelOn='On' labelOff='Off' />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
