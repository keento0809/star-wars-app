import { gql } from "@apollo/client";

export const QUERY_GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        openingCrawl
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

export const QUERY_GET_SPECIES = gql`
  query getAllSpecies {
    allSpecies {
      species {
        id
        name
        classification
        designation
        averageHeight
        averageLifespan
        eyeColors
        hairColors
        skinColors
        language
        homeworld {
          id
          name
        }
        created
        edited
      }
    }
  }
`;
