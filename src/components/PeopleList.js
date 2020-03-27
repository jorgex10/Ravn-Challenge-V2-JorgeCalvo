import React from 'react';
import Person from './Person';

const PeopleList = ({ people }) => (
  <>
    {
        people.map((person) => (<Person person={person.node} key={person.node.id} />))
      }
  </>
);
export default PeopleList;
