const eventEmitter = require("events")

const event = new eventEmitter()

// event.on('sayMyName',()=>{
//     console.log("your name is vishant");
// });

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is okay`);
});

event.emit('checkPage',200, 'ok')
