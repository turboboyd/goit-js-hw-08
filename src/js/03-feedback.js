import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputValue = inputEl.value;
const textareaValue = textareaEl.value;

let formData = {};


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 500));

populateTextarea();


function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(e) {
  e.preventDefault();

  if (inputValue === '' || textareaValue === '') {
    alert('All fields must be hidden');
  } else {
    const user = {
      email: inputValue,
      message: textareaValue,
    };
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
      const { email, message } = JSON.parse(savedMessage);
      inputEl.value = email;
      textareaEl.value = message;
      console.log(textareaEl);
  }
}