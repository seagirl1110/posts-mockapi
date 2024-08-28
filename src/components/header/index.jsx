import styles from './styles.module.css';
import Logo from './../../assets/icons/logo-white.svg';

const navItems = ['Главная', 'Музыка', 'Сообщества', 'Друзья'];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img className={styles.logo} src={Logo} alt="Logo_MECK" />
        <nav className={styles.nav_list}>
          {navItems.map((item, index) => (
            <div className={styles.nav_item} key={index}>
              {item}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
