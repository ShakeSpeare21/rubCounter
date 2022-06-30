var timer = 1000;
var shag = 362.32;

function count(num, elem) {
    var l = document.querySelector('#' + elem);
    n = 0;
    let t = timer;
    let interval = setInterval(() => {
        n += shag;
        l.innerHTML = n.toFixed(2) + ' рублей';
    }, t);

}

count(timer, 'counter1');