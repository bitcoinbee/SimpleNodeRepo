

const http =require('http');

const server =http.createServer((req,resp)=>{
    //console.log(req)
    //resp.write('Welcome to our home page')
    //resp.end()

    if(req.url==="/")
    {
        resp.end("welcome to our home page")
    }
     else if(req.url==="/about")
    {
        resp.end("Here is our short history")
    }
    else{
    resp.end(`
    <h1>OOPS !!!
    <P> Missing url resources <p>
    <a href ="/">back home</a>`
    )
    }
})
server.listen(5000)
