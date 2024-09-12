// alert('Welcome to class');
/*
console.log(document.getElementById('demo'));
console.log(document.getElementById('clickme'));
*/

// var btn = document.getElementById('clickme');
// document.querySelector('#clickme'); //only 1
// document.querySelectorAll('.clickme'); //all

// btn.addEventListener('click', function(){
//     alert('Don\'t click me!');
// });

/**
 * click 2 times button then show the alert
 * you already clicked 2 times button
 */
var counter = 0;
var btn = document.getElementById('clickme');
/*
debugger;
btn.click() = function () {
    counter++;

    if (counter % 2 === 0) {
        alert('You already clicked 2 times button!');
        counter = 0;
    }
};
*/

function changeText(text) {
    // console.log(text);
}

btn.addEventListener('click', function() {
    counter++;

    if (counter === 2) {
        alert('You already clicked 2 times button!');
        counter = 0;
    }
});

(document.getElementById('text-input')).addEventListener('change', function(event) {
    console.log('You have changed: ' + event.target.value);
})

var value = 0;
var newValue = "0";

console.log(newValue + value); // 00
console.log(typeof (newValue + value)); // string