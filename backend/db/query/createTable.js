const createTodoListTable =
`CREATE TABLE TODOLIST (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  TITLE VARCHAR(64),
  CONTENT TEXT,
  STATUS VARCHAR(64),
  AUTHOR VARCHAR(64)
  );`;

const createUserTable = 
`
CREATE TABLE USER (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  USERNAME VARCHAR(64),
  AUTHORIZATION BOOLEAN
  );
`;

export {createTODOLISTTable, createUSERTable};