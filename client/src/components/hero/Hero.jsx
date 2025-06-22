import styles from './hero.module.css'
import StarSketch from '../../assets/icons/home-star-sketch.svg'

const Hero = () => {
    return (
        <section id="home" className={styles.hero_container}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>maneuver</h1>
                <h2 className={styles.hero_subtitle}>
                    We turn your vision into stunning, <br /> streamlined digital experiences
                </h2>
                <p className={styles.hero_description}>
                    Through strategy, sleek visuals, and clean code, we help startups and growing brands turn traffic into real results.
                </p>
                <p className={styles.hero_quote}>— Built by creatives who care about clarity & conversion.</p>
                <div className={styles.hero_buttons}>
                    <a href="#contactus" className={styles.hero_button_primary}>Get Started</a>
                    <a href="#portfolio" className={styles.hero_button_secondary}>Explore Our Work</a>
                </div>
            </div>

            <div className={styles.hero_image}>
                <img src={StarSketch} alt="StarSketch" />
            </div>
        </section>
    )
}

export default Hero