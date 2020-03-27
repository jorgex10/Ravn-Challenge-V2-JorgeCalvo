/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PeopleList from './PeopleList';
import Loading from './Loading';
import Error from './Error';

const QUERY_PEOPLE = gql`
  query getPeople($cursor: String) {
    allPeople(first: 5, after: $cursor) {
      edges {
        node {
          id
          name
          species {
            id
            name
          }
          homeworld {
            id
            name
          }
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
  }
`;

const Sidebar = () => {
  const {
    loading, error, data, fetchMore,
  } = useQuery(QUERY_PEOPLE);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const onLoad = (endCursor) => {
    fetchMore({
      variables: {
        cursor: endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.allPeople.edges;
        const { pageInfo } = fetchMoreResult.allPeople;

        setIsLoadingMore(false);
        if (!fetchMoreResult || fetchMoreResult === 'undefined' || newEdges.length === 0) {
          return previousResult;
        }

        return (
          {
            allPeople: {
              __typename: previousResult.allPeople.__typename,
              edges: [...previousResult.allPeople.edges, ...newEdges],
              pageInfo,
            },
          }
        );
      },
    });
  };

  useEffect(() => {
    if (data?.allPeople) {
      setIsLoadingMore(true);
      setTimeout(() => onLoad(data.allPeople.pageInfo.endCursor), 1500);
    }
  },
  [data?.allPeople?.pageInfo.endCursor]);

  if (error) return <Error />;

  return (
    <div className="scroll-div">
      {data?.allPeople && <PeopleList people={data.allPeople.edges} />}
      { (loading || isLoadingMore) && <Loading /> }
    </div>
  );
};

export default Sidebar;
