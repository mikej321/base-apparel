import './styles/style.sass';

const iconContainer = document.querySelector('.icon-container');
const inputEmail = document.querySelector("input[type='email']");
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.err-message');

const emailRegex = /^\w+@\w+\.(?:com|fr|co\.uk|com\.br|net)/gmi;

window.onload = removeData();

function removeData() {
    inputEmail.value = '';
}




inputEmail.addEventListener('input', () => {
    if (!emailRegex.test(inputEmail.value)) {
        if (inputEmail.hasAttribute('valid')) {
            inputEmail.removeAttribute('valid');
            errorMessage.setAttribute('error', '');
            errorIcon.setAttribute('error', '');
            inputEmail.setAttribute('invalid', '');
            inputEmail.focus();
            iconContainer.removeAttribute('success')
        } else {
            errorMessage.setAttribute('error', '');
            errorIcon.setAttribute('error', '');
            inputEmail.setAttribute('invalid', '');
            inputEmail.focus();
            iconContainer.removeAttribute('success');
        }
    } else {
        if (inputEmail.hasAttribute('invalid')) {
            inputEmail.removeAttribute('invalid');
            errorMessage.removeAttribute('error');
            errorIcon.removeAttribute('error');
            inputEmail.setAttribute('valid', '');
            iconContainer.setAttribute('success', '');
        } else {
            errorMessage.removeAttribute('error');
            errorIcon.removeAttribute('error');
            inputEmail.setAttribute('valid', '');
            iconContainer.setAttribute('success', '');
        }
    }
})