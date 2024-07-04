// src/components/AxiosInterceptorSetup.tsx
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/app/providers/auth-provider';

const AxiosInterceptorSetup: React.FC = () => {
  const { accessToken, refreshTokenFunc, logout } = useAuth();

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          await refreshTokenFunc();
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }
        if (error.response?.status === 403) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshTokenFunc, logout]);

  return null;
};

export default AxiosInterceptorSetup;
