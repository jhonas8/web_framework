import navbarLinks from './navbar-links/main.mjs'

class Components {
    
    constructor() {
        this.renderNavbarLinks = () => navbarLinks()        

        this.render = this.render.bind(this)
    }

    render() {
        this.renderNavbarLinks()
    }

}

export default new Components()
