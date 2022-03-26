const links = [
    'Home',
    'About',
    'Services',
    'Skills',
    'Contact',
]

export default function navbarLinks(){
    $(function() {
        links.forEach(
            link => {
                $('ul#navbar-links')
                    .append(`
                        <li class="navbar-link">
                            ${ link }
                        </li>
                    `)
            }
        )
    })
    console.log('Estamos funcionando')
}

