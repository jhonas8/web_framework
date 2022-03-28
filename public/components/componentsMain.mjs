import navbarLinks from './navbar-links/main.mjs'

class Components {
    #renderNavbarLinks = () => {
        const isNavbarRendered = $('nav#navbar-component').length

        if(!isNavbarRendered) return

        navbarLinks()
    }
    
    render() {
        //Navbar
        this.#renderNavbarLinks()
    }
}

export default new Components()
