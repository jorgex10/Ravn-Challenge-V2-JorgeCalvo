import React from 'react';

import './styles/PeopleList.css';

const PeopleList = () => (
  <div className="person-item">
    <div>
      <p className="person-name">Luke Skywalker</p>
      <p className="person-info">Human from Tatooine</p>
    </div>
    <div>
      <i className="arrow right" />
    </div>
  </div>
);

export default PeopleList;
