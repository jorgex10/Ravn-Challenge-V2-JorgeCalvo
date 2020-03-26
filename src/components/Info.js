import React from 'react';

import InfoDescription from './InfoDescription';
import InfoVehicles from './InfoVehicles';
import './styles/Info.css';

const Info = () => (
  <div className="info">
    <InfoDescription />
    <InfoVehicles />
  </div>
);

export default Info;
