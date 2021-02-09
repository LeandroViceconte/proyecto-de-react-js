import styles from './NavBar.module.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const NavBar = ({navbar, logo, options}) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}> logo </div>
            <ul className={styles.options}>
                <li><a href="">Poductos</a></li>
                <li><a href="">Consescionarios</a></li>
                <li><a href="">contactanos</a></li>
                <li><ShoppingCartIcon /></li>
            </ul>
        </nav>
        
    );
}

export default NavBar; 
