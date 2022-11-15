// Logout 
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });

    // When logout confirmation is successful user will be redirected to starting page.
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
};

// Logout on-click listner
document.querySelector('#logout').addEventListener('click', logout);