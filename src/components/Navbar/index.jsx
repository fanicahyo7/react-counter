import shoppingIcon from '../../assets/shopping-icon.svg'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
    <nav className={style.nav}>
      <img className={style.navIcon} src={shoppingIcon} alt="Shopping Icon" />
      <h1 className={style.navTitle}>Shopping List</h1>
    </nav>
    )
}

export default Navbar