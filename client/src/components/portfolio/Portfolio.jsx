import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';

import PsBgOne from '../../assets/images/portfolio/ps-bg-one.png';
import PsBgTwo from '../../assets/images/portfolio/ps-bg-two.png';
import NmBgOne from '../../assets/images/portfolio/nm-bg-one.png';
import NmBgTwo from '../../assets/images/portfolio/nm-bg-two.png';
import McBgOne from '../../assets/images/portfolio/mc-bg-one.png';
import McBgTwo from '../../assets/images/portfolio/mc-bg-two.png';
import PmcBgOne from '../../assets/images/portfolio/pmc-bg-one.png';
import PmcBgTwo from '../../assets/images/portfolio/pmc-bg-two.png';
// import StrideBgOne from '../../assets/images/portfolio/stride-bg-one.png';
// import StrideBgTwo from '../../assets/images/portfolio/stride-bg-two.png';

import PrintSaathiHome from '../../assets/icons/portfolio/print-saathi-home.svg';
import NoMondayHome from '../../assets/icons/portfolio/nomonday-home.svg';
import MejocareHome from '../../assets/icons/portfolio/mejocare-home.svg';
import PMCHome from '../../assets/icons/portfolio/pragmatic-home.svg';
// import StrideHome from '../../assets/icons/portfolio/stride-home.svg';

import PrintSaathiLogo from '../../assets/icons/portfolio/print-saathi.svg';
import NoMondayLogo from '../../assets/icons/portfolio/no-monday.svg';
import MejocareLogo from '../../assets/icons/portfolio/mejocare.svg';
import PMCLogo from '../../assets/icons/portfolio/pmc.svg';
// import StrideLogo from '../../assets/icons/portfolio/stride.svg';

import AvatarFemaleOne from '../../assets/icons/portfolio/avatar-female-one.svg';
import AvatarFemaleTwo from '../../assets/icons/portfolio/avatar-female-two.svg';
import AvatarFemaleThree from '../../assets/icons/portfolio/avatar-female-three.svg';
import AvatarMaleOne from '../../assets/icons/portfolio/avatar-male-one.svg';
import AvatarMaleTwo from '../../assets/icons/portfolio/avatar-male-two.svg';
import AvatarMaleThree from '../../assets/icons/portfolio/avatar-male-three.svg';

const projectData = [
    {
        bg1: PsBgOne,
        bg2: PsBgTwo,
        home: PrintSaathiHome,
        title: 'PrintSaathi',
        link: 'https://printsaathi.com/',
        tags: 'web design . responsive design',
        testimonial: [
            'I wanted to share this wonderful testimonial that highlights the great work Maneuver did on the UI/UX for the PrintSaathi project:',
            '"Earlier, the design was just a basic MVP, but Maneuver significantly improved it. Their keen eye for UI/UX and attention to detail really elevated the user experience. I was genuinely impressed by their design sense and the real value they added. Excellent work!"',
            'Thank you once again for your valuable contribution - your work truly made a difference!'
        ],
        author: {
            name: 'Lucky Raj',
            role: 'Founder PrintSaathi',
            avatar: AvatarMaleOne
        },
        logo: PrintSaathiLogo
    },
    {
        bg1: NmBgOne,
        bg2: NmBgTwo,
        home: NoMondayHome,
        title: 'NoMonday Studios',
        link: 'https://www.nomondaystudios.com/',
        tags: 'web design . website development . responsive design',
        testimonial: [
            "Maneuver was a game-changer for my brand agency's website. The team instantly got my vision and turned it into a sleek, user-friendly platform that feels both modern and intentional. Communication was smooth, and they were quick to adapt to feedback.",
            "I appreciated their eye for detail and ability to balance clean design with real functionality. I'd absolutely recommend Maneuver to anyone serious about elevating their digital presence."
        ],
        author: {
            name: 'Mona Hovaren',
            role: 'Owner NoMonday Studios',
            avatar: AvatarFemaleOne
        },
        logo: NoMondayLogo
    },
    {
        bg1: McBgOne,
        bg2: McBgTwo,
        home: MejocareHome,
        title: 'Mejocare',
        link: 'https://mejocare.com/',
        tags: 'web design . responsive design',
        testimonial: [
            'Working with Maneuver was seamless and rewarding. They understood the essence of our brand and translated it into a clean, professional web design that reflects our values and global mission.',
            'The team was responsive, creative, and committed to quality at every stage. Their ability to handle complex content with clarity really stood out. We\'re proud of the final result and highly recommend Maneuver to any healthcare or service-based brand.'
        ],
        author: {
            name: 'Shaheen Ahmed',
            role: 'Coordinator Mejocare',
            avatar: AvatarMaleTwo
        },
        logo: MejocareLogo
    },
    {
        bg1: PmcBgOne,
        bg2: PmcBgTwo,
        home: PMCHome,
        title: 'Pragmatic Management Consultancy',
        link: 'https://pmc.org.in/',
        tags: 'web design . responsive design',
        testimonial: [
            'We are thrilled to share this glowing testimonial from our client, PMC:',
            '"Maneuver has been an absolute game-changer for us. Their expertise in UI/UX design and web development has transformed our online presence. The team is not only highly skilled but also incredibly responsive and easy to work with. We couldn\'t be happier with the results!"',
            'Thank you for your trust and partnership!'
        ],
        author: {
            name: 'Rishabh Jain',
            role: 'Founder PMC',
            avatar: AvatarFemaleOne
        },
        logo: PMCLogo
    }
];

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Carousel auto-advance every 15 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projectData.length);
        }, 15000);
        return () => clearInterval(timer);
    }, []);

    const activeProject = projectData[activeIndex];
    return (
        <section id="portfolio" className={styles.portfolio_container}>
            <div className={styles.portfolio_header_container}>
                <h2 className={styles.portfolio_title}>Portfolio</h2>
                <p className={styles.portfolio_header_subtitle}>Built on Trust</p>
                <p className={styles.portfolio_header_description}>From startups to seasoned brands - we've helped them scale, stand out, and stay ahead. Their words say it better than we could.</p>
            </div>
            
            <div className={styles.portfolio_content_wrapper}>
                <div className={styles.portfolio_project_card}>
                    <div className={styles.portfolio_project_images}>
                        <img className={styles[`portfolio_project_bg_${activeProject.title.replace(/\s+/g, '').toLowerCase()}1`]} src={activeProject.bg1} alt={activeProject.title + ' bg'} />

                        <img className={styles[`portfolio_project_bg_${activeProject.title.replace(/\s+/g, '').toLowerCase()}2`]} src={activeProject.bg2} alt={activeProject.title + ' bg'} />

                        <div className={styles.portfolio_project_main}>
                            <div className={styles.portfolio_project_home_wrapper}>
                                <img className={styles.portfolio_project_home} src={activeProject.home} alt={activeProject.title + ' home'} />

                                <div className={styles.portfolio_project_info}>
                                    <div className={styles.portfolio_project_title_row}>
                                        <h3 className={styles.portfolio_project_title}>{activeProject.title}</h3>
                                        <a className={styles.portfolio_project_link} href={activeProject.link} target="_blank" rel="noopener noreferrer">visit site</a>
                                    </div>

                                    <p className={styles.portfolio_project_tags}>{activeProject.tags}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.portfolio_project_testimonial_wrapper}>
                        <div className={styles.portfolio_project_testimonial}>
                            {activeProject.testimonial.map((t, i) => <p key={i}>{t}</p>)}
                        </div>

                        <div className={styles.portfolio_project_author_wrapper}>
                            <div className={styles.portfolio_project_author_info}>
                                <h3 className={styles.portfolio_project_author_name}>{activeProject.author.name}</h3>
                                <p className={styles.portfolio_project_author_role}>{activeProject.author.role}</p>
                            </div>
                            <img className={styles.portfolio_project_author_avatar} src={activeProject.author.avatar} alt="avatar" />
                        </div>
                    </div>
                </div>

                <div className={styles.portfolio_logos_wrapper}>
                    {projectData.map((project, idx) => (
                        <button
                            key={project.title}
                            className={styles.portfolio_logo + (activeIndex === idx ? ' ' + styles.active : '')}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={project.title}
                        >
                            <img src={project.logo} alt={project.title + ' logo'} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;