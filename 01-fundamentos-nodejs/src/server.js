/* 
  CommonJS => require
  const http = require('http')
*/

// ESModules => import/export
import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// GET => Buscar recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// Stateful = aplicação depende de informações em memória, dados estão em memória
// Stateless = os dados se mantêm igual, não salva informações em memória

// Query Parameters: URL Stateful => filtros, paginação, não obrigatórios
// Route Parameters: Identificação de recurso (url da requisição)
// Request Body: Envio de informações de um formulário (HTTPs)

const server = http.createServer(async (req, res) => {
  const {method, url} = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route) {
    const routeParams = req.url.match(route.path)

    return route.hendler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)
