import {gql} from "apollo-boost";

export const SIGNIN = gql`
mutation login($username: String!, $password: String! ) {
  authorize(credentials: {
    username: $username,
    password: $password
  }) {
    accessToken
  }
}
`;