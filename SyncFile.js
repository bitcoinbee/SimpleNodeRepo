console.log(`starting `)
const {readFileSync,writeFileSync}= require('fs')

const firstFile = readFileSync('./Resources/File1.txt','utf8')
const secondFile = readFileSync('./Resources/File2.txt','utf8')

//console.log(firstFile);
////console.log(secondFile);

//console.log(`combination of both file: ${firstFile}, ${secondFile} `)

writeFileSync('./Resources/File3.txt',`Here is the result: ${firstFile}, ${secondFile}`,
                   {flag:'a'})

console.log(`finish writing `)

console.log(`next starting  `)