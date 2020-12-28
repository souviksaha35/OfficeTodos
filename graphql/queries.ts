/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      tasks {
        items {
          id
          name
          userID
          image
          description
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      teamUser {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        tasks {
          nextToken
        }
        teamUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeamUser = /* GraphQL */ `
  query GetTeamUser($id: ID!) {
    getTeamUser(id: $id) {
      id
      userID
      user {
        id
        name
        imageUri
        tasks {
          nextToken
        }
        teamUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamID
      team {
        id
        name
        description
        teamUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeamUsers = /* GraphQL */ `
  query ListTeamUsers(
    $filter: ModelTeamUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        teamID
        team {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      description
      teamUser {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        teamUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      userID
      user {
        id
        name
        imageUri
        tasks {
          nextToken
        }
        teamUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      image
      description
      completed
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        user {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        image
        description
        completed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
