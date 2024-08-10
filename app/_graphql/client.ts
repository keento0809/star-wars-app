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

export const QUERY_SPECIES = gql`
  query getSpecies {
    species {
      name
      classification
      homeworld {
        name
      }
    }
  }
`;

export const QUERY_FILMS = gql`
  query getFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        created
        director
        characterConnection {
          characters {
            birthYear
            created
            edited
          }
          totalCount
        }
      }
    }
  }
`;
