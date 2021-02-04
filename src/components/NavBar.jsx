import styles from './NavBar.module.scss';

const NavBar = ({navbar, logo, options}) => {
    return (
        <nav className={styles.navbar}>
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
