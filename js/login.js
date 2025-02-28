document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const pinNumber = document.getElementById('pin-number').value;
    if (accountNumber.length === 11 && pinNumber === '1234') {
        alert('Welcome Back To Our System');
        window.location.href = 'main.html';
    }
    else {
        alert('Please Input The Actual Data');
    }
})