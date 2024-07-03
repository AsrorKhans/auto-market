// src/components/AuthProvider.tsx
import React, {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

interface AuthContextType {
    user: { name: string; roles: string[] } | null;
    login: (user: { name: string; roles: string[] }, accessToken: string, refreshToken: string) => void;
    logout: () => void;
    hasPermission: (role: string) => boolean;
    accessToken: string | null;
    refreshTokenFunc: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [user, setUser] = useState<{ name: string; roles: string[] } | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = (user: { name: string; roles: string[] }, accessToken: string, refreshToken: string) => {
        setUser(user);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    };

    const logout = useCallback(() => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    }, [navigate]);

    const hasPermission = (role: string) => {
        return user?.roles.includes(role) || false;
    };

    const refreshTokenFunc = async () => {
        try {
            const response = await fetch('/api/refresh-token', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({refreshToken})
            });
            const data = await response.json();
            if (data.accessToken) {
                setAccessToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            } else {
                logout();
            }
        } catch (error) {
            logout();
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        if (storedUser && storedAccessToken && storedRefreshToken) {
            setUser(JSON.parse(storedUser));
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, login, logout, hasPermission, accessToken, refreshTokenFunc}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
