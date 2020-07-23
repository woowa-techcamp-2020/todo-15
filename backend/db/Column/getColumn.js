const promisePool = require("../connection.js");

const { todoList } = require("../tableList.js");
function getTodoList() {
  const query = `select * from ${todoList} order by groupId`;
  return promisePool.execute(query);
}

module.exports = getColumns;

// test

// deleteTodo(24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });