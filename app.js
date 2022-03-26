const homeRouter = require('./src/routers/home/main')

const server = require('./src/server')
const app = server.app

app.use('/', homeRouter)

server.start()
