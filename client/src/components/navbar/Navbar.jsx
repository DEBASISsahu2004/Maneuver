import styles from './navbar.module.css'
import React, { useState, useEffect } from 'react'

import CircleArrow from '../../assets/icons/circle-arrow-right.svg'
import ServiceIcon from '../../assets/icons/navbar/service.svg'
import ValueIcon from '../../assets/icons/navbar/value.svg'
import PortfolioIcon from '../../assets/icons/navbar/portfolio.svg'
import FaqIcon from '../../assets/icons/navbar/faq.svg'

const NAV_LINKS = [
  {
    href: '#services',
    label: 'Services',
    icon: ServiceIcon,
    alt: 'service icon',
  },
  {
    href: '#values',
    label: 'Values',
    icon: ValueIcon,
    alt: 'value icon',
  },
  {
    href: '#portfolio',
    label: 'Portfolio',
    icon: PortfolioIcon,
    alt: 'portfolio icon',
  },
  {
    href: '#faqs',
    label: 'FAQ',
    icon: FaqIcon,
    alt: 'faq icon',
  },
];

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth > 900;

  return (
    <nav className={styles.navbar_container} {...(isDesktop ? { 'data-aos': 'fade-up', 'data-aos-duration': '1500' } : {})}>
      <div className={styles.navbar}>
        {isDesktop ? (
          <>
            <a className={styles.navbar_hero_link} href="#home">mnvr.</a>
            {NAV_LINKS.map(link => (
              <a key={link.href} className={styles.navbar_link} href={link.href}>{link.label}</a>
            ))}
            <a className={styles.navbar_appointment_link} href="#contactus">
              Book an appointment
              <img className={styles.arrow} src={CircleArrow} alt="arrow" />
            </a>
          </>
        ) : (
          <>
            <a className={styles.navbar_hero_link} href="#home">m.</a>
            {NAV_LINKS.map(link => (
              <a key={link.href} className={styles.navbar_link} href={link.href}>
                <img src={link.icon} alt={link.alt} />
              </a>
            ))}
            <a className={styles.navbar_appointment_link} href="#contactus">
              Appointment
              <img className={styles.arrow} src={CircleArrow} alt="arrow" />
            </a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar