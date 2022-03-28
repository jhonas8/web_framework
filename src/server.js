class Server {
    //Private properties 
    #path = require('path')
    #bodyParser = require('body-parser')
    #express = require('express')
    #http = require('http')

    constructor(props){
        this.app = this.#express()
        this.port = process.env.PORT || 8000

        this.start = this.start.bind(this)

        this.app.use(
            this.#bodyParser
                .urlencoded({extended: false})
        )

        this.app.use(
            this.#express.static(
                this.#path
                    .join(__dirname, '..', 'public')
            )
        )

        //ERROR 404 page 
        this.app.use((req, res, ctx) => {
            res.status(404).send(`
                <h1> Page not found! </h1>
            `) 
        })
    }

    start() {
        const server = this.#http.createServer(this.app) 

        server.listen(this.port, () => {
            console.log(`The server is running on port ${this.port}`)
        })
    }
    
}

module.exports = new Server()
