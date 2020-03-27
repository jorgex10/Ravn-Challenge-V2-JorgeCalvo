import React from 'react';

import './styles/InfoStyles.css';

const InfoDescription = () => (
  <div className="info-description">
    <p className="title">General Information</p>

    <div className="row">
      <p className="key">Eyes Color</p>
      <p className="value">Blue</p>
    </div>
    <div className="row">
      <p className="key">Hair Color</p>
      <p className="value">Blue</p>
    </div>
    <div className="row">
      <p className="key">Skin Color</p>
      <p className="value">Blue</p>
    </div>
    <div className="row">
      <p className="key">Birth Year</p>
      <p className="value">Blue</p>
    </div>
  </div>
);

export default InfoDescription;
