const logregBox = document.querySelector('.logreg-box')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')

registerlink.addEventListener('click', () => {
    logregBox.classList.add('active')
});

loginlink.addEventListener('click', () => {
    logregBox.classList.remove('active')
});