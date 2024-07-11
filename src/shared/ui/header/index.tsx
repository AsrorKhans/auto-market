import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { PAGE_ROUTES } from '@shared/constants/route-constants.ts';

export const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '') {
      navigate('/' + PAGE_ROUTES.CATALOG);
    }
  }, [location.pathname]);
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
              to={'/' + PAGE_ROUTES.CATALOG}
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
              to={'/' + PAGE_ROUTES.CALCULATION}
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
              to={'/' + PAGE_ROUTES.UPDATE_PRICE}
            >
              Обновить цены
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
