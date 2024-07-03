import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetailInfo = () => {
  const params = useParams();
  const { id, car } = params;
  console.log('params', params);
  return (
    <>
      <ul>
        {/*<li>{props.Name}</li>*/}
        {/*<li>{props.Miles_per_Gallon}</li>*/}
        {/*<li>{props.Cylinders}</li>*/}
        {/*<li>{props.Displacement}</li>*/}
        {/*<li>{props.Horsepower}</li>*/}
        {/*<li>{props.Weight_in_lbs}</li>*/}
        {/*<li>{props.Acceleration}</li>*/}
        {/*<li>{props.Year}</li>*/}
        {/*<li>{props.Origin}</li>*/}
      </ul>
    </>
  );
};
export default CarDetailInfo;
