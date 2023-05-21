import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input');


let formData = {};


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 1000));

// populateTextarea();


function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  formData;
}






function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}



















// function onTextInput(e) {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
//   const formDataJSON = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataJSON);
// }

// function populateTextarea() {
//   // const data = JSON.parse(STORAGE_KEY)
//   // console.log(data)
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {

//       const { email, message } = JSON.parse(savedMessage);
//       inputEl.value = email;
//       textareaEl.value = message;
//       console.dir(formEl);
//   }
// }
