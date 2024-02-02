const fs = require("fs")

// // Reading a file
// let fileContent = fs.readFileSync("text.txt")

// console.log(`hello, ${fileContent}`)

// // writing in a file
// fs.writeFileSync('text.txt', 'The latest text in town')

// // append a file
// fs.appendFileSync('text.txt', ' Hello, I am new here')

// // delete a file
// fs.unlinkSync("to.js")

// // create and write in a file
// fs.writeFileSync('new.txt', 'I was dynamically created ')


// create a directory
// fs.mkdirSync("newDir");

// check the content in a directory
// let folderPath =  "C:\\Users\\evelyn.isaac\\Documents\\personal_\\tutorials\\scaler_node\\node module system\\myDirectory"
// const folderContent = fs.readdirSync(folderPath)
// console.log(folderContent)

// check if a directory exist or not
// let doesExist = fs.existsSync('myDirectory/text.txt')
// console.log(doesExist)

// delete directory
fs.rmdirSync('newDir')