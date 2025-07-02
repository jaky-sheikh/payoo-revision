// Step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    // step-2: prevent reloading browser
    event.preventDefault();
    //  step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    // step-4: bad way to validate 
    if (phoneNumber === '01917673432' && pinNumber === '1234') {
        console.log('You are logged in')
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong phone or pin number.')
    }
})