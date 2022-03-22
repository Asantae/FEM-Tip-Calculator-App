/*declares variables essential for the app to function */
var bill = document.querySelector('#bill')
var radio = document.querySelectorAll('.radio'); /*all radio values stored in an array */
var customPercentage = document.querySelector('#custom');
var numOfPeople = document.querySelector('#people');
var percentage = 0;
var people = 0;
var textTip = 0;
var textTotal = 0;
var totalPrice = 0;
document.getElementById('totalAmount').innerHTML = '$' + textTotal.toFixed(2); /* where the total output is store */
document.getElementById('tipAmount').innerHTML = '$' + textTip.toFixed(2); /* where the tip output is stored */
/* listens for any input */
bill.addEventListener('input', updateValue);
numOfPeople.addEventListener('input', updateTotal);
for (var i = 0; i < radio.length; i++) {
    radio[i].onclick = updateTip;
}
customPercentage.addEventListener('input', customTip);
/* essential methods */
function updateValue(inputBill){
    textTotal = inputBill.target.value;
    textTotal = textTotal*1;
    finalOutput();
    
}

function updateTotal(inputPeople){
    people = inputPeople.target.value;
    people = people*1;
    finalOutput();
}

/* this function cycles through the the radio buttons and takes the value of the button that  was clicked */
function updateTip() {
    for (var c = 0; c < radio.length; c++) {
        while (radio[c].checked == true){
            percentage = radio[c].defaultValue/100;
            break;
        }
    }
    finalOutput();
}

function customTip(){

}

/* this method outputs the total price and tip amount to the page */
function finalOutput(){
    textTip = textTotal * percentage;
    totalPrice = (textTip + textTotal) / people;
    if (totalPrice === Infinity) {
        totalPrice = textTip + textTotal;
    }
    document.getElementById('tipAmount').innerHTML = '$' + parseFloat(textTip).toFixed(2);
    document.getElementById('totalAmount').innerHTML = '$' + parseFloat(totalPrice).toFixed(2);
}

/* create method that checks decimal places of input*/
/* create reset button */
/* finish custom tip input */