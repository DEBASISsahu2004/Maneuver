import styles from './navbar.module.css'
import CircleArrow from '../../assets/icons/circle-arrow-right.svg'

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <a className={styles.navbar_hero_link} href="#hero">mnvr.</a>
      <a className={styles.navbar_link} href="#services">Services</a>
      <a className={styles.navbar_link} href="#portfolio">Portfolio</a>
      <a className={styles.navbar_link} href="#about">About</a>
      <a className={styles.navbar_link} href="#faq">FAQ</a>

      <button className={styles.navbar_button}>
        Book an appointment
        <img src={CircleArrow} alt="arrow" />
      </button>
    </nav>
  )
}

export default Navbar