/* testing */

console.log(document.querySelectorAll('.radio'));
/* var radio = document.querySelectorAll('.radio');

console.log(document.querySelectorAll('.customPerc')); 


/* testing for loop */
/*var i;
for (i = 0; i < radio.length; i++) {
    radio[i].onclick = function() {
        if (radio.checked == true) {
            return alert(isTrue)
        }
    }
}

/* creates function that resets the calculator */

var radio = document.getElementsByClassName('radio'); /*all radio values stored in an array */
var textTotal = document.getElementById('totalAmount'); /* where the total output is store */
var textTip = document.getElementById('totalTip'); /* where the tip output is stored */
alert(radio.opt1.value);

/* for (var i = 0; i < radio.length; i++) {
    radio[i].onclick = function(){
        textTotal.value = this.dataset.value;
        
        }
} */
var j = 0;
radio[j].onclick = function () {
    for (var j = 0; j < radio.length ; j++){
        console.log('hi', j);
    }
}
function reset()
{

}

/* creates the function that will output the total price */
function total()
{
   
}

/* creates the function that will output the total tip */
function tip()
{
    

}