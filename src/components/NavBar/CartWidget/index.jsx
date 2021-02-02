import './NavBar.scss';

function NavBar(navbar, logo, options) {
    return (
        <nav className={navbar}>
            <div className={logo}>Logo </div>
            <ul className={options}>
                <li><a href="">Poductos</a></li>
                <li><a href="">Consescionarios</a></li>
                <li><a href="">contactanos</a></li>
            </ul>
        </nav>

    );
}

export default NavBar; 
