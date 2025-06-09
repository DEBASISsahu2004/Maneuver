import styles from './navbar.module.css'
import React, { useState, useEffect } from 'react'

import CircleArrow from '../../assets/icons/circle-arrow-right.svg'
import ServiceIcon from '../../assets/icons/navbar/service.svg'
import ValueIcon from '../../assets/icons/navbar/value.svg'
import PortfolioIcon from '../../assets/icons/navbar/portfolio.svg'
import FaqIcon from '../../assets/icons/navbar/faq.svg'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar_container}>
      {windowWidth > 600 ? (
        <>
          <a className={styles.navbar_hero_link} href="#hero">mnvr.</a>
          <a className={styles.navbar_link} href="#services">Services</a>
          <a className={styles.navbar_link} href="#values">Values</a>
          <a className={styles.navbar_link} href="#portfolio">Portfolio</a>
          <a className={styles.navbar_link} href="#faqs">FAQ</a>
          <a className={styles.navbar_appointment_link} href="#contactus">
            Book an appointment
            <img className={styles.arrow} src={CircleArrow} alt="arrow" />
          </a>
        </>
      ) : (
        <>
          <a className={styles.navbar_hero_link} href="#hero">m.</a>
          <a className={styles.navbar_link} href="#services"><img src={ServiceIcon} alt="service icon" /></a>
          <a className={styles.navbar_link} href="#values"><img src={ValueIcon} alt="value icon" /></a>
          <a className={styles.navbar_link} href="#portfolio"><img src={PortfolioIcon} alt="portfolio icon" /></a>
          <a className={styles.navbar_link} href="#faqs"><img src={FaqIcon} alt="faq icon" /></a>
          <a className={styles.navbar_appointment_link} href="#contactus">
            Appointment
            <img className={styles.arrow} src={CircleArrow} alt="arrow" />
          </a>
        </>
      )}
    </nav>
  )
}

export default Navbar