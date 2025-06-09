import styles from './hero.module.css'
import StarSketch from '../../assets/icons/home-star-sketch.svg'

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