/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeamUser = /* GraphQL */ `
  subscription OnCreateTeamUser {
    onCreateTeamUser {
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
export const onUpdateTeamUser = /* GraphQL */ `
  subscription OnUpdateTeamUser {
    onUpdateTeamUser {
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
export const onDeleteTeamUser = /* GraphQL */ `
  subscription OnDeleteTeamUser {
    onDeleteTeamUser {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
