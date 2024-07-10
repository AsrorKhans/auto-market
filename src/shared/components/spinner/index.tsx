import React from 'react';
import './styles.scss';

export const LoadingAnimation = () => {
  return (
    <div className={'loading-animation'}>
      <h3 className={'loading-animation__title'}>Загрузка...</h3>
      <div className="loader"></div>
    </div>
  );
};
