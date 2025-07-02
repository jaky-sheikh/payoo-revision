// Step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    // step-2: prevent reloading browser
    event.preventDefault();
    //  step-3: get the phone number 
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);
})