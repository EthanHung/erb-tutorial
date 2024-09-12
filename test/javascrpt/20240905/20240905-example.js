var btn = document.getElementById('submit-btn');
btn.addEventListener('click', function() {
    alert('we will calucate the sum function');
    var result = 0;
    for (let index = 0; index < 10; index++) {
        // this is keep repeat to assign the same value sum(1, 2)
        //result = sum(1, 2);

        // eigther 1 syntax to do the sum all
        result = result + sum(1, 2);
        // result += sum(1, 2);
    }
    alert('result is ' + result);
    // console.log('result is ', result);
});

function sum(a, b) {
    return a + b;
}