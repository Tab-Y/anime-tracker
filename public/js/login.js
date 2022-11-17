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
            document.location.replace('/api/discover');
        } else {
            alert(response.statusText);
        }
    }
};



// Submission click-on listners
// Login submit form
document
    .querySelector('#logged-form')
    .addEventListener('submit', loginFormHandler);
