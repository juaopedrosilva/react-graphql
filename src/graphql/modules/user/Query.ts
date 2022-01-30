import { gql } from "@apollo/client";

export const UserQuery = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      login
      bio
    }
  }
`;
