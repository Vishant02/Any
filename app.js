var x = require('./count');
console.log(x.counter(["shaun","miranda","alex"]));
console.log(x.adder(5,6));
console.log(x.adder(5,x.pi));
var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('someEvent',function(mssg){
    console.log(mssg);
});

myEmmitter.emit('someEvent','the event was emitted');
import * as utils from 'util'

var person = function(name){
    this.name = name;
}

