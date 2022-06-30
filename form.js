const form = document.querySelector('#signup');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

function passwordsMatch() {
    return password.value.trim() === confirmPassword.value.trim();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let validForm = passwordsMatch();
    if (!validForm) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        password.focus();
    }
});