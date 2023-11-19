const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'farmer' && password === 'farmer@123') {
        // Successful login
        window.location.href = './LandingPage/a.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
