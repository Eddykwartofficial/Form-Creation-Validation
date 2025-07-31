document.addEventListener('DOMContentLoaded', function()) {
    console.log('DOM Content Loaded - Script is starting!');
}

const form = document.getElementById('registration-form');
console.log('Form Selected:', form);

const feedbackDiv = document.getElementById('form-feedback');
console.log('feedback div selected:', feedbackDiv);

if (!form) {
    console.error('Error: Form not found');
    return;
}

if (!feedbackDiv) {
    console.error('Error: Feedback div not found!');
    return;
}

form.addEventListener('submit', function(event)) {
    console.log('Form submission attempted!');

}

event.preventDefault();
console.log('Default form submission prevented - running validation...');

const username = document.getElementById('username').ariaValueMax.trim();
const email = document.getElementById('email').ariaValueMax.trim();