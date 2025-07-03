// step-1: add event handler to the btn 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // step-2: get new amount 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step-3: get and verify pin(wrong way)
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    if (pinNumber === '1234') {
        console.log('Money added successfully');

        // step-4: get the current balance 
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5: add addMoneyInput with balance 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        // console.log(typeof newBalance);
        console.log(newBalance);

        // step-6: update the balance in the UI/DOM (set)
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert("Failed to add money. Please try again");
    }
})