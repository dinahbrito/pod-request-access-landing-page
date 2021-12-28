const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    checkEmail();
});

function checkEmail()
{
    const emailValue = email.value;

    if (emailValue === '') {
        setErrorFor(email, 'Oops! Please add your email');
    } else if (!validEmail(emailValue)) {
        setErrorFor(email, 'Oops! Please check your email');
    } else if (validEmail(emailValue)) {
        removeError(email, 'Thanks for subscribing!');
    }
}

function removeError(input, message)
{
    const inputWrapper = input.parentElement;
    const small = inputWrapper.querySelector('small');
    small.style.color = 'green';
    small.innerText = message;
    inputWrapper.className = 'input-wrapper';
}

function setErrorFor(input, message)
{
    const inputWrapper = input.parentElement; //.input-wrapper
    const small = inputWrapper.querySelector('small');
    // add error message inside small
    small.innerText = message;

    // adds error class
    inputWrapper.className = 'input-wrapper error';

}

function validEmail(email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// test validEmail
console.log(validEmail('user@email.com')); // true
console.log(validEmail('adasdfasf@')); //false