const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
    const db = require('./db.json')
    const {email, password} = req.body
    console.log(req.body);
    const user = db.employee.find(user => user.email === email && user.password === password)
    console.log(user);
    if (user) {
        res.jsonp(user)
    }
    res.sendStatus(401)
})


server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})