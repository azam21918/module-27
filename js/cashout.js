// cash out button ke dhorsi 
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    // add amount ke dhorsi
    const cashOutAmmount = document.getElementById('cash-out-ammount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmmount);
    // pin ke dhorsi 
    const pin = document.getElementById('cashout-pin-number').value;
    const convertedPin = parseInt(pin);
    // main-balance ke dhorbo
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
        const difference = convertedMainBalance - convertedCashOutAmount;
        document.getElementById('main-balance').innerText = difference;
    }
    else {
        alert('Please Input The Actual Data');

    }
})  