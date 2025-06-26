import React from 'react'
import styles from './service.module.css'

import NomondayHome from '../../assets/images/service/NomondayHome.png'
import PMCHome from '../../assets/images/service/PMCHome.png'
import MejocareHome from '../../assets/images/service/MejocareHome.png'
import MalangHome from '../../assets/images/service/MalangHome.png'

import Star from '../../assets/icons/service-card2/star.svg'
import FramerLogo from '../../assets/icons/service-card2/framer-logo.svg'
import FigmaLogo from '../../assets/icons/service-card2/figma-logo.svg'
import LottieLogo from '../../assets/icons/service-card2/lottie-logo.svg'
import VsLogo from '../../assets/icons/service-card2/vs-logo.svg'

import StrideHome from '../../assets/icons/service-card3/stride-home.svg'

import BlockOne from '../../assets/icons/service-card4/block-one.svg'
import BlockTwo from '../../assets/icons/service-card4/block-two.svg'
import BlockThree from '../../assets/icons/service-card4/block-three.svg'
import MiddleBlockCircle from '../../assets/icons/service-card4/middle-block-circle.svg'

import MnvrNoti from '../../assets/icons/service-card5/mnvr-noti.svg'
import Avatar1Noti from '../../assets/icons/service-card5/avatar1-noti.svg'
import Avatar2Noti from '../../assets/icons/service-card5/avatar2-noti.svg'

const serviceCards = [
  {
    key: 'one',
    title: 'Websites that speak for you',
    desc: 'Custom websites that reflect your brand, guide your users, and drive real results - no templates, no guesswork.',
    content: (
      <div className={styles.service_card_animation}>
        <img className={styles.service_card_img_one} src={PMCHome} alt="PMCHome" />
        <img className={styles.service_card_img_one} src={MejocareHome} alt="MejocareHome" />
        <img className={styles.service_card_img_one} src={MalangHome} alt="MalangHome" />
        <img className={styles.service_card_img_one} src={NomondayHome} alt="NomondayHome" />
      </div>
    ),
    cardClass: styles.service_card_one,
  },
  {
    key: 'two',
    title: 'Designs That Mesmerize',
    desc: 'We craft beautiful, on-brand interfaces with seamless UX - designed to guide, engage, and convert without ever getting in the way.',
    content: (
      <div className={styles.service_card_animation}>
        <img className={styles.service_card_star_two} src={Star} alt="star circle" />
        <div className={styles.service_card_animation_icons}>
          <div className={styles.service_card_icon_two}><img className={styles.icon} src={FramerLogo} alt="Framer Logo" /></div>
          <div className={styles.service_card_icon_two}><img className={styles.icon} src={FigmaLogo} alt="Figma Logo" /></div>
          <div className={styles.service_card_icon_two}><img className={styles.icon} src={LottieLogo} alt="Lottie Logo" /></div>
          <div className={styles.service_card_icon_two}><img className={styles.icon} src={VsLogo} alt="VS Code Logo" /></div>
        </div>
      </div>
    ),
    cardClass: styles.service_card_two,
  },
  {
    key: 'three',
    title: 'Apps That Feel Effortless',
    desc: 'Clean, intuitive app design built for real-world use - beautiful on the outside, seamless underneath.',
    content: (
      <div className={styles.service_card_animation}>
        <img className={styles.service_card_stride_three} src={StrideHome} alt="Stride Home" />
      </div>
    ),
    cardClass: styles.service_card_three,
  },
  {
    key: 'four',
    title: 'Built to Rank, Ready to Grow',
    desc: 'Our SEO work ensures your digital presence gets seen by the right people - fast-loading pages, optimized structure, and content that ranks.',
    content: (
      <div className={styles.service_card_animation}>
        <img className={styles.service_card_four_block_one} src={BlockOne} alt="block 1" />
        <div className={styles.service_card_four_middle_block_wrapper}>
          <img className={styles.service_card_four_circle} src={MiddleBlockCircle} alt="circle" />
          <img className={styles.service_card_four_block_two} src={BlockTwo} alt="block 2" />
        </div>
        <img className={styles.service_card_four_block_three} src={BlockThree} alt="block 3" />
      </div>
    ),
    cardClass: styles.service_card_four,
  },
  {
    key: 'five',
    title: 'Launches That Hit the Ground Running',
    desc: `Optimized, polished, and supported beyond launch - we make sure you're set to scale from day one.`,
    content: (
      <div className={styles.service_card_animation}>
        <div className={`${styles.service_card_five_noti_wrapper} ${styles.service_card_five_mnvr}`}>
          <img src={MnvrNoti} alt="mnvr" />
          <div className={styles.service_card_five_noti_content}>
            <h4>Maneuver Support</h4>
            <p>App has been successfully deployed :{')'}</p>
          </div>
        </div>
        <div className={`${styles.service_card_five_noti_wrapper} ${styles.service_card_five_avatar1}`}>
          <img src={Avatar1Noti} alt="avatar" />
          <div className={styles.service_card_five_noti_content}>
            <h4>Alex Garcia</h4>
            <p>Just tried your site looks stunning...</p>
          </div>
        </div>
        <div className={`${styles.service_card_five_noti_wrapper} ${styles.service_card_five_avatar2}`}>
          <img src={Avatar2Noti} alt="avatar" />
          <div className={styles.service_card_five_noti_content}>
            <h4>Kaylee Jones</h4>
            <p>Your App is trending on all platforms</p>
          </div>
        </div>
      </div>
    ),
    cardClass: styles.service_card_five,
  },
];

const ServiceCard = ({ title, desc, content, cardClass }) => (
  <div className={`${cardClass} ${styles.service_card}`} data-aos="fade-up" data-aos-duration="1500">
    <div className={styles.service_card_content}>
      <h3 className={styles.service_card_title}>{title}</h3>
      <p className={styles.service_card_desc}>{desc}</p>
    </div>
    {content}
  </div>
);

const Service = () => {
  return (
    <section id="services" className={styles.service_container}>
      <div className={styles.service_header_container}>
        <h2 className={styles.service_title} data-aos="fade-up" data-aos-duration="1500">Services</h2>
        <p className={styles.service_header_subtitle} data-aos="fade-up" data-aos-duration="1500">Everything you need to outmaneuver the competition</p>
        <p className={styles.service_header_description} data-aos="fade-up" data-aos-duration="1500">Every move we make is intentional. Designed to position your brand, engage your users & drive performance.</p>
      </div>
      <div className={styles.service_content_wrapper}>
        {serviceCards.map(({ key, ...rest }) => (
          <ServiceCard key={key} {...rest} />
        ))}
      </div>
    </section>
  )
}

export default Service