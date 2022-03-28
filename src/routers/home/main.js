class HomeRoute {
    #path = require('path')
    #express = require('express')

    constructor(){
        this.router = this.#express.Router()

        this.sendHomepageHtml = this.sendHomepageHtml.bind(this)

        this.sendHomepageHtml()
    }

    sendHomepageHtml() {
        this.router.get('/', (req, res, next) => {
            const relativePath =
                this.#path.relative(__dirname, '../../../public')

            res.sendFile(this.#path.join(relativePath, 'index.html'))
        })
    }
}

module.exports = new HomeRoute().router
