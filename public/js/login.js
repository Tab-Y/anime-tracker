// Login Form
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collecting login form values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // A POST request that sends off to API
    if (email && password) {
        const response = await fetch('/api/user/login', {
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
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const password = document.querySelector('#pass-sign').value.trim();

    // A POST request that sends off to API
    if (email && username && password) {
        const response = await fetch('/api/user', {
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
    .querySelector('.logged-form')
    .addEventListener('submit', loginFormHandler);
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
