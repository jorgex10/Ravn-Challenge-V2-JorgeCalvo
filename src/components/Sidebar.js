/* eslint-disable no-underscore-dangle */
import React from 'react';
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
  } = useQuery(QUERY_PEOPLE, {
    pollInterval: 1500,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="scroll-div">
      <PeopleList
        people={data.allPeople.edges}
        onLoadMore={() => fetchMore({
          variables: {
            cursor: data.allPeople.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.allPeople.edges;
            const { pageInfo } = fetchMoreResult.allPeople;

            if (!fetchMoreResult || fetchMoreResult === 'undefined' || newEdges.length === 0) {
              return previousResult;
            }

            return (
              {
                allPeople: {
                  __typename: previousResult.allPeople.__typename,
                  edges: [...newEdges, ...previousResult.allPeople.edges],
                  pageInfo,
                },
              }
            );
          },
        })}
      />
      <Loading />
    </div>
  );
};

export default Sidebar;
