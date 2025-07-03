document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('cash out btn clicked');

        const cashOut = document.getElementById('input-cash-out').value;
        const pinNumber = document.getElementById('cash-out-pin-number').value;
        console.log(cashOut, pinNumber);

        if (pinNumber === '1234') {
            console.log('Cash out successfull');

            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance);
            const balanceNumber = parseFloat(balance);
            const cashOutNumber = parseFloat(cashOut);

            // reduce the balance 
            const newBalance = balanceNumber - cashOutNumber;
            console.log(newBalance);

            // update the UI 
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Failed to cash out');
        }
    })