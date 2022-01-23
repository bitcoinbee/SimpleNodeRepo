
// we use callback functionality when reading/writing file async 

console.log(`starting `)
const {readFile, writeFile}=require('fs')
readFile('./Resources/File1.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return null;
    }
    const first = result;

    readFile('./Resources/File2.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return null;
        }
        const second = result;
    
       writeFile('./Resources/File4.txt',
       `here is the write file result from async: ${first}, ${second}`,
       {flag:'a'} ,(err, result)=>{
           if(err)
           {
               console.log(err)
               return
           }

           console.log(result)
           console.log(`finish `)

       })
    
    })

})

console.log(`next starting `)