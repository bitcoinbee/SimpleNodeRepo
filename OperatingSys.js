const OS =require('os')
// info about user
const user = OS.userInfo();
console.log(user);
console.log(OS.uptime());

const CurrentOs = {
    name:OS.type(),
    release: OS.release(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem(),
}

console.log(CurrentOs);

/// file path 
const path =require('path')
console.log(path)
console.log(path.join('/content','subfolder','test.txt'))
const absPath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absPath)
console.log(__dirname)