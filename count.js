var counter = function(arr){
    return "There are "+arr.length+" elements in this array"
}

var adder = function(a,b){
    return `the sum of the two nos is ${a+b}`;
}
var pi = 3.14

module.exports = {
    adder: adder,
    counter: counter,
    pi: pi
}