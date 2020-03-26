import React from 'react';

import './styles/Person.css';

const Person = ({ person }) => (
  <div className="person-item" key={person.id}>
    <div>
      <p className="person-name">{person.name}</p>
      <p className="person-info">
        {person.species ? person.species.name : ''}
        {' '}
        from
        {' '}
        {person.homeworld.name}
      </p>
    </div>
    <div>
      <i className="arrow right" />
    </div>
  </div>
);

export default Person;
