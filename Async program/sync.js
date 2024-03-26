const fs = require('fs')

console.log('First Line')
 
fs.readFile('text.txt', callback1)
function callback1(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
}
fs.readFile('text2.txt', callback2)
function callback2(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
}
console.log("Last Line")


// console.log("First Line")

// let data = fs.readFileSync('text.txt')
// console.log(data.toString())

// console.log("Second Line")
// const buf1 = Buffer.alloc(3);
// const buf2 = Buffer.from("hello buffer");
// buf1.write("Buffer really rocks!")
// const b1 = buf1.toString()
// const b2 = buf2.toJSON()
// console.log(b1)
// console.log(b2)