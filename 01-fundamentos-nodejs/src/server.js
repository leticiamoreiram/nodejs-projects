/* 
  CommonJS => require
  const http = require('http')
*/

// ESModules => import/export
import http from 'node:http'
import { randomUUID } from 'node:crypto' 
import { json } from './middlewares/json.js'
import { Database } from './database.js'

// GET => Buscar recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// Stateful = aplicação depende de informações em memória, dados estão em memória
// Stateless = os dados se mantêm igual, não salva informações em memória

const database = new Database()

const server = http.createServer(async (req, res) => {
  const {method, url} = req

  await json(req, res)

  if(method === 'GET' && url === '/users') {

    const users = database.select('users')

    return res
      .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {

    const { name, email } = req.body

    const user = {
      id: randomUUID(),
      name,
      email,
    }

    database.insert('users', user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
