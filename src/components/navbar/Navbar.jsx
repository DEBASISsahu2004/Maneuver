import styles from './navbar.module.css'
import CircleArrow from '../../assets/icons/circle-arrow-right.svg'

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <a className={styles.navbar_hero_link} href="#hero">mnvr.</a>
      <a className={styles.navbar_link} href="#services">Services</a>
      <a className={styles.navbar_link} href="#values">Values</a>
      <a className={styles.navbar_link} href="#portfolio">Portfolio</a>
      <a className={styles.navbar_link} href="#faqs">FAQ</a>
      <a className={styles.navbar_appointment_link} href="#contactus">
        Book an appointment
        <img className={styles.arrow} src={CircleArrow} alt="arrow" />
      </a>
    </nav>
  )
}

export default Navbar