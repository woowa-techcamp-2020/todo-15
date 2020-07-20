import Item from '../components/item';
import { postFetchManger } from '../modules/fetchManger';

export function addTodoList() {
  // todo: 리팩토링... 어떻게 하지
  document.addEventListener('click', (e) => {
    //add버튼을 눌렀을 때만 동작
    if (e.target.id.substr(0, 7) !== 'add-btn') return;
    const groupId = e.target.id.substr(8);
    const ul = document.querySelector(`#todoList-${groupId}`);
    //새로운 투두리스트의 id이자 idx(순서)
    //id는 실제로 데이터베이스에 전달되지 않으므로 프론트에만 보여주는 임시값이 된다
    const idx = +ul.firstChild.getAttribute('idx') + 1;

    const textarea = document.querySelector(`#textarea-${groupId}`);
    const title = textarea.value.substr(0, 20); //20글자까지는 타이틀
    const content = textarea.value.substr(20);

    const item = new Item();

    item.addItem(idx, idx, `todoList-${groupId}`, '', '', '윤동주');

    const addedItem = ul.firstChild;
    //title영역
    addedItem.childNodes[1].childNodes[1].childNodes[3].innerText = title;
    //content 영역
    addedItem.childNodes[3].childNodes[1].innerText = content;
    textarea.value = '';
    textarea.focus();
    const addBtn = textarea.nextElementSibling.firstElementChild;
    addBtn.setAttribute('disabled', 'true');

    // 아이템 개수 업데이트
    const result = document.querySelector(`.num-of-todos-${groupId}`);
    //text 제외한 자식 li태그 개수
    result.textContent = idx;

    postFetchManger('/api/todo', {
      idx,
      title,
      content,
      author: 'haerang',
      groupId: `todoList-${groupId}`,
    });
  });
}