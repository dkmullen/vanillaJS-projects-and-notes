const form = document.querySelector('#form');
let data = new FormData(form);
let payload = {};

form.addEventListener('submit', readForm);

function readForm(event) {
  event.preventDefault();
  for (let i of data) {
    payload[i[0]] = i[1];
  }
  console.log(payload);
}

const togglePwButton = document.querySelector('#toggle-pw-button');
const pw = document.querySelector('#password');
togglePwButton.addEventListener('click', togglePw);

function togglePw(event) {
  if (pw.type === 'password') {
    pw.type = 'text';
    document.querySelector('#visibility_on').hidden = true;
    document.querySelector('#visibility_off').hidden = false;
  } else {
    pw.type = 'password';
    document.querySelector('#visibility_on').hidden = false;
    document.querySelector('#visibility_off').hidden = true;
  }
}
