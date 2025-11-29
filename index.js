const display = document.getElementById('display');

// Βεβαιωνόμαστε ότι η οθόνη ξεκινά με μηδέν 
if (!display.value) display.value = '0';

function appendToDisplay(input){
    //Αποφεύγουμε την προσθήκη πολλαπλών μηδενικών στην αρχή και χειριζόμαστε τα σφάλματα
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