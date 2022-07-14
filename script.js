const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');
const evaluationForm = document.querySelector('#evaluation-form');
const main = document.getElementsByTagName('main')[0];

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

function nameData() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const nameP = document.createElement('p');
  nameP.innerText = `Nome: ${name} ${lastName}`; // nome :
  return nameP;
}

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

// const emailValue = `Email: ${email.value}`;
// const casa = `Casa: ${document.getElementById('house').value}`;
// const family = familyData();
// }

function formSubmit(event) {
  event.preventDefault();
  evaluationForm.className = 'display-none';
  const formData = document.createElement('div');
  formData.id = 'form-data';
  main.appendChild(formData);
  formData.appendChild(nameData());
}

submitBtn.addEventListener('click', formSubmit);
