// add money button ke dhorsi 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // add amount ke dhorsi
    const addAmmount = document.getElementById('add-ammount').value;
    const convertedAmount = parseFloat(addAmmount);
    // pin ke dhorsi 
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    // main-balance ke dhorbo
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        alert('Please Input The Actual Data');

    }
})