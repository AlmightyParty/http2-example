const http2 = require('spdy') // 若为http2则把'https'模块改为'spdy'模块
const url = require('url')
const fs = require('fs')
const express = require('express')//express https spdy
const path = require('path')

const app = express()

const options = {
	key: fs.readFileSync(`${__dirname}/server.key`),
	cert: fs.readFileSync(`${__dirname}/server.crt`)
}

const allow = (res) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "X-Requested-With")
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')))

app.get('/option/?', (req, res) => {
	allow(res)
	let size = req.query['size']
	let delay = req.query['delay']
	let buf = new Buffer(size * 1024 * 1024)
	setTimeout(() => {
		res.send(buf.toString('utf8'))
	}, delay)
})

http2.createServer(options, app).listen(9992, (err) => { // http2服务器端口为1002
	if (err) throw new Error(err)
	console.log('Http2.x server listening on port 9992.')
})  