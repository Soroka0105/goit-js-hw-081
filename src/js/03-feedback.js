const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);

form.addEventListener('input', throttle(formData, 500));
function formData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  //   console.log(parsedData.email);
}
form.elements.email.value = parsedData.email;
form.elements.message.value = parsedData.message;

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(parsedData);
  form.reset();
  localStorage.clear();
}
