import { postFetchManger } from './utils/fetchManger.js';
import { userApi } from './utils/routerList.js';
export default function login() {
  const Header = document.querySelector('header');
  const beforelogin = document.getElementById('beforelogin');
  const afterlogin = document.getElementById('afterlogin');

  Header.querySelector("input[type='button']").addEventListener(
    'click',
    loginHandler,
  );

  Header.querySelector('#logout-btn').addEventListener('click', logoutHandler);

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.setItem('authorization', '');
    localStorage.setItem('username', '');
    localStorage.setItem('userId', '');
    beforelogin.style = '';
    afterlogin.classList.add('hidden');
  }

  function loginHandler(e) {
    e.preventDefault();

    const username = Header.querySelector('#username').value;
    const authorziation = Header.querySelector('#authorization').checked;

    beforelogin.style.display = 'none';
    afterlogin.classList.remove('hidden');
    postLogin(username, authorziation);
  }
  function postLogin(username, authorziation) {
    postFetchManger(userApi, { username, authorziation })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
