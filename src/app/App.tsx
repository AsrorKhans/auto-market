import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/app/providers/auth-provider.tsx';
import ErrorBoundary from '@error-boundary/index.tsx';
import AppRoutes from '@/routes';
import AxiosInterceptorSetup from '@components/axios-interceptor';
import '@/shared/styles/index.scss';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AxiosInterceptorSetup />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
