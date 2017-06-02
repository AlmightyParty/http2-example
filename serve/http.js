var http=require('http');
var url=require('url');

http.createServer((req,res)=>{
var urlObject=url.parse(req.url,true);
console.log(urlObject);
var pathname=urlObject.pathname;
if(pathname=='/go'){
res.end('http1 server')
}
}).listen(9999,()=>{
  console.log('http1 server has created');
})