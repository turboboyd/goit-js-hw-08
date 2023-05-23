import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('.feedback-form input');
const textareaEl = formEl.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 500));

populateForm();

let savedDataJSON = localStorage.getItem(STORAGE_KEY);

const formData = JSON.parse(savedDataJSON) || {};

function onTextInput(e) {
  formData[e.target.name] = e.target.value;

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(e) {
  e.preventDefault();
  if (inputEl.value === '' || textareaEl.value === '') {
    alert('All fields must be filled');
  } else {
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function populateForm() {
  let savedDataJSON = localStorage.getItem(STORAGE_KEY);
  if (savedDataJSON) {
    const { email, message } = JSON.parse(savedDataJSON);
    inputEl.value = email || '';
    textareaEl.value = message || '';
  }
}
