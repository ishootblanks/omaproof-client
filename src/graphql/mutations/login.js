import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation Login($contactNumber: String!, $password: String!) {
    login(contactNumber: $contactNumber, password: $password) {
      token
      user {
        id
        name
        picture
        groups {
          id
          description
        }
      }
    }
  }
`;

export default LOGIN_MUTATION;
