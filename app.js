// Interval
// const interval = setInterval(() => {
//     console.log("Hello Node..")
// }, 1000);

// Module
// const pr = require('./module')
// console.log(pr)

// Os module
// const aboutOs = require('os')
// console.log(aboutOs.userInfo())
// console.log(aboutOs.uptime()/60)
// const sysInfo = {
//     name: aboutOs.type(),
//     release: aboutOs.release(),
//     totalMem: aboutOs.totalmem()/1024,
//     freeMem: aboutOs.freemem()/1024
// }
// console.log(sysInfo)

// Path module
// const path = require('path')
// console.log(path.resolve(__dirname, 'app.js'))

// Fs(File System) module (Sync)
// const {readFileSync, writeFileSync} = require('fs')
// const firstFile = readFileSync('./TextFiles/first.txt', 'utf8')
// const secondFile = readFileSync('./TextFiles/second.txt', 'utf8')
// writeFileSync('./TextFiles/created_file.txt', `Hello this is new created: \n${firstFile} \n${secondFile}`)
// console.log(readFileSync('./TextFiles/created_file.txt', 'utf8'));

// fs(File system) module (Async)
// const {readFile, writeFile} = require('fs')
// console.log('Start task..');
// readFile('./TextFiles/first.txt', 'utf8', (error, result) => {
//     if(error) {
//         console.log(error);
//         return
//     }
//     console.log(result);
//     readFile('./TextFiles/second.txt', 'utf8', (error, result) => {
//         if(error) {
//             console.log(error)
//             return
//         }
//         console.log(result)
//         readFile('./TextFiles/created_file.txt', 'utf8', (error, result) => {
//             if (error) {
//                 console.log(error)
//                 return
//             }
//             console.log(result)
//             writeFile('./TextFiles/created_file.txt', `Creator: Hello Node World..`, (error) => {
//                 if (error) {
//                     console.log(error)
//                     return
//                 }
//               readFile('./TextFiles/created_file.txt', 'utf8', (error, data) => {
//                 if (error) {
//                     console.log(error)
//                 }
//                 console.log(data)
//               })  
//             })
//         })
//     })
// })
// console.log('End task..');


// Http module
// const httpMode = require('http')
// const server = httpMode.createServer((req, res) => {
//     if (req.url === '/home') {
//         res.end('Home page..')
//     }
//     else if (req.url === '/about') {
//         res.end('About page..')
//     }
//     else {
//         res.end(`
//             <h1>Error 1000</h1>
//             <p>Invalid request..</p>
//             <a href="/home">Go to home</a>
//             `)
//     }
// })
// server.listen(5000)

// npm lodash
// const lodash = require('lodash')
// const item = [1,[2,[3,[4,[5]]]]]
// const newItem = lodash.flattenDeep(item)
// console.log(item);
// console.log(newItem);


// Event loop
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(`requesr event : ${req.url}`);
    res.end('Hello Node World..');
})
server.listen(5000, ()=> {
    console.log("Server listening on port number: 5000");
})
