import styles from './portfolio.module.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.portfolio_container}>
            <div className={styles.portfolio_header_container}>
                <h2 className={styles.portfolio_title}>Portfolio</h2>
                <p className={styles.portfolio_header_subtitle}>Our Work</p>
                <p className={styles.portfolio_header_description}>
                    Explore our diverse portfolio showcasing innovative solutions and creative designs that drive success.
                </p>
            </div>

            <div className={styles.portfolio_content_wrapper}>
                <div className={styles.portfolio_item}>
                    <img src="path/to/image.jpg" alt="Portfolio Item" className={styles.portfolio_image} />
                    <h3 className={styles.portfolio_item_title}>Project Title</h3>
                    <p className={styles.portfolio_item_description}>Brief description of the project.</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio