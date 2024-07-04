import { NavLink, useLocation } from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';

export const HeaderComponent = () => {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);
  console.log('location', location);
  return (
    <header className={'header-component '}>
      <div className={'main-container'}>
        <div className={'content'}>
          <div className="header-logo"></div>
          <div className="header-nav">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                    ? 'active-navbar-link'
                    : 'nav-link'
              }
              to={'/'}
            >
              Главная страница
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                    ? 'active-navbar-link'
                    : 'nav-link'
              }
              to={'/calculation'}
            >
              Калькулятор
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                    ? 'active-navbar-link'
                    : 'nav-link'
              }
              to={'/update-prices'}
            >
              Обновить цены
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
