const display = document.getElementById('display');

// We make sure that the input starts with 0
if (!display.value) display.value = '0';

function appendToDisplay(input){
    //We avoid adding multiple leading zeros and handle errors
    if (display.value === '0' || display.value === 'Error') {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = '0';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}