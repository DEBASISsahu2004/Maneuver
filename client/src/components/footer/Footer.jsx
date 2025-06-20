import styles from './footer.module.css'
import Instagram from '../../assets/icons/footer/instagram.svg'
import X from '../../assets/icons/footer/x.svg'
import Threads from '../../assets/icons/footer/threads.svg'
import Mail from '../../assets/icons/footer/mail.svg'

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_content}>
                <div className={styles.footer_text_container}>
                    <p className={styles.footer_text_one}>We help brands build websites and apps that do more than just look good - they work.Think of us as your creative and technical partner - here to bring your ideas online, solve problems, and support you long after launch.</p>
                    <p className={styles.footer_text_two}>© 2025 Maneuver Studios. All rights reserved</p>
                </div>
                <div className={styles.footer_socials}>
                    <a target="_blank" className={styles.socials_link} href="https://www.instagram.com/mnvr.stdios/">
                        <img src={Instagram} alt="instagram" className={styles.footer_icon} />
                    </a>

                    <a target="_blank" className={styles.socials_link} href="https://x.com/mnvrstdios">
                        <img src={X} alt="x" className={styles.footer_icon} />
                    </a>
                    <a target="_blank" className={styles.socials_link} href="https://www.threads.net/@mnvr.stdios">
                        <img src={Threads} alt="threads" className={styles.footer_icon} />
                    </a>

                    <a target="_blank" className={styles.socials_link} href="mailto:contact@maneuverstudios.com">
                        <img src={Mail} alt="mail" className={styles.footer_icon} />
                    </a>
                </div>
            </div>
            <h1 className={styles.footer_logo}>maneuver</h1>
        </footer>
    )
}

export default Footer