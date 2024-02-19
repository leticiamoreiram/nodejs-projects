/* 
  CommonJS => require
  const http = require('http')
*/

// ESModules => import/export
import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end('Hello World')
})

server.listen(3333)
