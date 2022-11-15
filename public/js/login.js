// Login Form
const loginFormHandlebar = async (event) => {
    event.preventDefault();

    // Collecting login form values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#pass-login').value.trim();

    // A POST request that sends off to API
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        // When login form is correct user is redirected in their profile page
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};


// New user Sign-Up form
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collecting sign-up form values
    const email = document.querySelector('#email-sign').value.trim();
    const username = document.querySelector('#user-sign').value.trim();
    const password = document.querySelector('#pass-sign').value.trim();

    // A POST request that sends off to API
    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        // When sign-up is sucessful new user is redirected to the profile page
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};


// Submission click-on listners
// Login submit form
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandlebar);

// Sign-up submit form
document
    .querySelector('.sign-form')
    .addEventListener('submit', signupFormHandler);
