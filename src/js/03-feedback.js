const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

form.addEventListener('input', throttle(formData, 500));
if (parsedData) {
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}

function formData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  //   console.log(parsedData.email);
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.clear();
}
