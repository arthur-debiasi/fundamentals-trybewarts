const email = document.getElementById('email');
const password = document.getElementById('password');
const loginbtn = document.getElementById('login-btn');

function loginValidation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

loginbtn.addEventListener('click', loginValidation);
