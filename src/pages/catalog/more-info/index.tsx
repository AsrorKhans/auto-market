import React from 'react';
import { useParams } from 'react-router-dom';

const MoreInfo: React.FC = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <span>
        More Info for <strong>{params.id}</strong>
      </span>
    </div>
  );
};

export default MoreInfo;
