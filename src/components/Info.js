import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import InfoDescription from './InfoDescription';
import InfoVehicles from './InfoVehicles';
import './styles/Info.css';
import Loading from './Loading';

const QUERY_PERSON = gql`
  query getPerson($id: ID) {
    person(id: $id) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;

const Info = ({ personId }) => {
  const { loading, data } = useQuery(QUERY_PERSON, {
    variables: { id: personId },
  });

  return (
    <div className="info">
      {data?.person && <InfoDescription person={data.person} /> }
      {data?.person && <InfoVehicles vehicles={data.person.vehicleConnection.vehicles} /> }
      { loading && <Loading /> }
    </div>
  );
};

export default Info;
