var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method


  if (pathNoQuery === '/pay') {
    const balance = fs.readFileSync('db') - 100
    fs.writeFileSync('db', balance)
    response.setHeader('Content-Type', 'application/javascript')
    response.write(`${queryObject.callback}('success')`)
  } else {
    response.statusCode = 404
  }
  response.end()

  
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
