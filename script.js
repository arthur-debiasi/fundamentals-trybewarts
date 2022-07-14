const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');
const evaluationForm = document.querySelector('#evaluation-form');

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

// function nameData() {
//   const name = document.querySelector('#input-name').value;
//   const lastName = document.querySelector('#input-lastname').value;
//   return `Nome: ${name} ${lastName}`; // nome :
// }

// function familyData() {
//   const radioFamily = document.querySelectorAll('.evaluation-form-input-radio');
//   let family;
//   for (let i = 0; i < radioFamily.length; i += 1) {
//     if (radioFamily[i].checked === true) {
//       family = `Família: ${radioFamily[i].value}`;
//       break;
//     }
//   }
//   return family;
// }

// function materiasData() {
//   const materias = document.querySelectorAll('.evaluation-form-input-checkbox');
//   let materiasChecked = 'Família: ';
//   for (let i = 0; i < materias.length; i += 1) {
//     if (materias[i].checked === true) {
//       materiasChecked += `, ${materias[i].checked.value}`;
//     }
//   }
//   return console.log(materiasChecked);
// }

// function submitData() {
//   const name = nameData();
//   const emailValue = `Email: ${email.value}`;
//   const casa = `Casa: ${document.getElementById('house').value}`;
//   const family = familyData();
// }

function formSubmit(event) {
  event.preventDefault();
  evaluationForm.className = 'display-none';
  // const submitContainer = document.createElement
}

submitBtn.addEventListener('click', formSubmit);
