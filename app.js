const homeRouter = require('./src/routers/home/main')
const server = require('./src/server')

server.app.use('/', homeRouter)

server.start()
