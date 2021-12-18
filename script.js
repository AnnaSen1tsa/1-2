/*
let x = 3;
let Double = function() {
    x = x * 2;
    alert(x);
};

let Quadratic = function() {
    x = x * x;
    alert(x);
};

let PlusOne = function() {
    return x++;
};

let MinusOne = function() {
    return x--;
};

Double();
Quadratic();
*/

from = +prompt('Enter the First Number');
to = +prompt('Enter the Second Numder');
if (from > to) {
    alert("Error!");
    location.reload();
}

function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    step = 1;
    document.write("Your resalt:" + "<table border='2' cellspacing='1'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

let functionArr = [
    Double = function(x) {
        return x*2;
    },
    Quadratic = function(x) {
        return x*x;
    },
    XinX = function(x) {
        return x**x;
    },
    PlusOne = function(x) {
        return x+1;
    },
    MinusOne = function(x) {
        return x-1;
    }
];

/*
let Double = function(x) {
    return x*2;
};

let Quadratic = function(x) {
    return x*x;
};

let XinX = function(x) {
    return x**x;
};

let PlusOne = function(x) {
    return x+1;
};

let MinusOne = function(x) {
    return x-1;
};
*/