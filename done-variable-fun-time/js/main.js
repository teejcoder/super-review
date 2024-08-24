//--- Easy
//create a variable and assign it a number
let num = 100;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num, 90); // 90 90

//--- Medium
//create a variable that holds a value from the input
let valueFromInput = Number(document.querySelector('#danceDanceRevolution').value);

//add 25 to that number

valueFromInput += 25;

//alert that number
alert(valueFromInput);

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sumOfPreviousVariables);

function sumOfPreviousVariables(){
    console.log(valueFromInput + num, 115)// 110 110
}