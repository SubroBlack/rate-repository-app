import {gql} from "apollo-boost";

export const GET_REPOSITORIES = gql`
query{
  repositories {
    edges {
  	  node {
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