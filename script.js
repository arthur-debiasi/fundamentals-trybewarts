const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');

function loginValidation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', loginValidation);

function submitValidation() {
  if (agreement.value === 'on') {
    submitBtn.disabled = false;
  }
}

agreement.addEventListener('change', submitValidation);

function characterCounter() {
  commentCounter.innerText = 500 - (comment.value.length);
}

comment.addEventListener('input', characterCounter);
