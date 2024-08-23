document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'project_selection.html';
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'project_selection.html';
});

document.getElementById('to-register').addEventListener('click', () => {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
});

document.getElementById('to-login').addEventListener('click', () => {
    document.getElementById('register-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});
