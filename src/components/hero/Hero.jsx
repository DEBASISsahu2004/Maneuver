import styles from './hero.module.css'
import StarSketch from '../../assets/images/hero/starSketch.png'

const Hero = () => {
    return (
        <section id="hero" className={styles.hero_container}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>maneuver</h1>
                <h2 className={styles.hero_subtitle}>
                    Converting your visions into streamlined and stunning virtual products.
                </h2>
                <p className={styles.hero_description}>
                    High-impact websites and apps with strategy, sleek visuals, and clean code - built to attract, engage, and convert. From startups to growing brands, we help businesses turn digital traffic into real-world results.
                </p>
                <div className={styles.hero_buttons}>
                    <button className={styles.hero_button_primary}>Get Started</button>
                    <button className={styles.hero_button_secondary}>Explore Our Work</button>
                </div>
            </div>

            <div className={styles.hero_image}>
                <img src={StarSketch} alt="StarSketch" />
            </div>
        </section>
    )
}

export default Hero