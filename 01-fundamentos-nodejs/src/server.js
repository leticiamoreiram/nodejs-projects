/* 
  CommonJS => require
  const http = require('http')
*/

// ESModules => import/export
import http from 'node:http'

// GET => Buscar recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// Stateful = aplicação depende de informações em memória, dados estão em memória
// Stateless = os dados se mantêm igual, não salva informações em memória

const users = []

const server = http.createServer((req, res) => {
  const {method, url} = req

  if(method === 'GET' && url === '/users') {

    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {

    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john@email.com'
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
