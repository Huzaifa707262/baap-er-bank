document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwardField = document.getElementById('user-passward');
    const passward = passwardField.value;
    if (email === 'Huzaifa@gmail.com' && passward === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('information wrong')
    }
})