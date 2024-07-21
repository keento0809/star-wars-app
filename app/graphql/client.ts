import { gql } from "@apollo/client";

export const QUERY_GET_TEST = gql`
  query getTest {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;
