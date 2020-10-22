import {gql} from "apollo-boost";

export const GET_REPOSITORIES = gql`
query{
  repositories {
    edges {
  	  node {
        id
        fullName
        language 
        description 
        ownerAvatarUrl 
        stargazersCount 
        reviewCount 
        ratingAverage 
        forksCount
      }
  	}
  }
}
`;

export const AUTHORIZED_USER = gql`
query{
  authorizedUser {id, username}
}
`;