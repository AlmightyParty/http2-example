var http=require('https');
var url=require('url');

http.createServer((req,res)=>{
var urlObject=url.parse(req.url,true);
console.log(urlObject);
var pathname=urlObject.pathname;
if(pathname=='/go'){
  // res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains; preload')
  res.setHeader('Strict-Transport-Security', 'max-age=15552000;')
  res.end('http1 server')
}
}).listen(9999,()=>{
  console.log('http1 server has created');
})