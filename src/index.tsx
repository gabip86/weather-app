import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WeatherApp } from './WeatherApp';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
