
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'osama' && password === '775180535') {
        errorMessage.style.display = 'none';
        window.location.href = 'index.html'; // توجيه المستخدم إلى صفحة أخرى
    } else {
        errorMessage.style.display = 'block';
    }
}