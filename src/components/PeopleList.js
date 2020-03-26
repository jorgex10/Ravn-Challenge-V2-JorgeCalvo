import React from 'react';
import Person from './Person';

class PeopleList extends React.Component {
  render() {
    const { people, onLoadMore } = this.props;

    return (
      <>
        {
          people.map((person) => (<Person person={person.node} key={person.node.id} />))
        }
      </>
    );
  }
}

export default PeopleList;
