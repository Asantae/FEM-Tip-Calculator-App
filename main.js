/*declares variables essential for the app to function */
let myForm = document.querySelector('#myForm');
var bill = document.querySelector('#bill');
var radio = document.querySelectorAll('.radio'); /*all radio values stored in an array */
var customPercentage = document.querySelector('#custom');
var numOfPeople = document.querySelector('#people');
var percentage = 0;
var people = 0;
var textTip = 0;
var custom = 0;
var checkTotal = 0;
var textTotal = 0;
var totalPrice = 0;
document.getElementById('resetButton').addEventListener('click', formReset);
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
    checkTotal = inputBill.target.value;
    checkTotal = checkTotal*1
    textTotal = textTotal*1;
    checkNum();
    finalOutput();
    
}

function updateTotal(inputPeople){
    people = inputPeople.target.value;
    people = people*1;
    checkNum();
    finalOutput();
}

/* this number checks variables for values that would yield infinity or NaN */
function checkNum() {
    if (people == 0 || isNaN(people) == true || numOfPeople.value == "") {
        people = 1;
        textTotal = 0;
        document.querySelector('.zero-label').style.cssText = "color: hsl(0deg 85% 62%)";
        document.querySelector('#people').style.cssText = "outline-color: hsl(0deg 85% 62%)";
    }
    else {
        textTotal = checkTotal;
        document.querySelector('.zero-label').style = null;
        document.querySelector('#people').style = null;
    }
}

/* this function cycles through the the radio buttons and takes the value of the button that  was clicked */
function updateTip() {
    for (var c = 0; c < radio.length; c++) {

        if (radio[c].checked == true){
            percentage = radio[c].defaultValue/100;
        }
        if (custom != customPercentage.defaultValue) {
            percentage = custom/100;
        }
    }
    checkNum();
    finalOutput();
}

function customTip(inputCustom){
    custom = inputCustom.target.value;
    custom = custom*1;
    updateTip();
}

/* this method outputs the total price and tip amount to the page */
function finalOutput(){
    textTip = (textTotal * percentage) / people;
    totalPrice = textTip + (textTotal / people);
    
    if (totalPrice === Infinity) {
        totalPrice = textTip + textTotal;
    }
    document.getElementById('tipAmount').innerHTML = '$' + parseFloat(textTip).toFixed(2);
    document.getElementById('totalAmount').innerHTML = '$' + parseFloat(totalPrice).toFixed(2);
}

/* this method resets the form and all values */
function formReset() {
    custom = "";
    textTotal = 0;
    textTip = 0;
    percentage = 0;
    totalPrice = 0;
    checkTotal = 0;
    myForm.reset();
    finalOutput();
}

/* need to create method that checks decimal places of input*/
/* need to create a method that checks for negative numbers */