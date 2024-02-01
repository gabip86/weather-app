import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import { AppRoutes } from './routes/AppRoutes';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
  </React.StrictMode>
);
