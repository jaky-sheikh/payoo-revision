// step-1: add event handler to the btn 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // step-2: get new amount 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step-3: check pin 
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
})