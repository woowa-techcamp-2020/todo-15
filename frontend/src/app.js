const css = require('./scss/main.scss');
const variable = require('./scss/_variables.scss');
import './normalize.css';
import { toggle } from './modules/toggleInput.js';
import Container from './modules/container.js';
import { getFetchManger, postFetchManger } from './modules/fetchManger.js';
import Item from './modules/item';
// import Item from './modules/item.js';

let num_of_columns;
window.addEventListener('DOMContentLoaded', () => {
  getFetchManger('/api/todo/count')
    .then((res) => res.json())
    .then((data) => {
      num_of_columns = data;
      console.log(num_of_columns);
      const col = new Container();
      for (let i = 0; i < data; i++) {
        col.addContainer(i + 1);
      }
    })
    .catch((e) => console.log(e));

  getFetchManger('/api/todo')
    .then((res) => res.json())
    .then((data) => {
      const item = new Item();
      for (let i = 0; i < data.length; i++) {
        let groupId = data[i].groupId.split('-')[1];
        item.addItem(groupId, data[i].title, data[i].content, data[i].author); // todo:id추가하는 것 작성 필요
      }
    })
    .then(() => temp())
    .catch((e) => console.log(e));
});

// 각 컬럼의 투두리스트 개수를 구하기 위한 임시함수
const temp = () => {
  for (let i = 0; i < num_of_columns; i++) {
    const num_of_items = document.querySelector(`#ul-${i + 1}`);
    const result = document.querySelector(`.num-of-todos-${i + 1}`);
    //text 제외한 자식 li태그 개수
    result.innerText = num_of_items.childNodes.length - 1;
  }
};

toggle();

//ex)

// 1.POST

//const addButton = document.querySelector('.add-item-btn');
// console.log(addButton);
// const body = {
//   title: 'asdf',
//   content: 'asdf',
//   author: 'asdf',
//   groupId: 'todo-3',
//   idx: 11,
// };
// addButton.addEventListener(
//   'click',
//   postFetchManger('http://localhost:3000/api/todo', body),
// );
