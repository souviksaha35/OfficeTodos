/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTeamUser = /* GraphQL */ `
  mutation CreateTeamUser(
    $input: CreateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    createTeamUser(input: $input, condition: $condition) {
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
export const updateTeamUser = /* GraphQL */ `
  mutation UpdateTeamUser(
    $input: UpdateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    updateTeamUser(input: $input, condition: $condition) {
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
export const deleteTeamUser = /* GraphQL */ `
  mutation DeleteTeamUser(
    $input: DeleteTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    deleteTeamUser(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
