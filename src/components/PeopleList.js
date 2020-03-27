import React from 'react';
import Person from './Person';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const PeopleList = ({ people, onLoadMore }) => {
  useInfiniteScroll(onLoadMore);

  return (
    <>
      {
        people.map((person) => (<Person person={person.node} key={person.node.id} />))
      }
    </>
  );
};


export default PeopleList;
