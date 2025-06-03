import React from 'react'
import styles from './service.module.css'

import NomondayHome from '../../assets/images/service/NomondayHome.png'
import PMCHome from '../../assets/images/service/PMCHome.png'
import MejocareHome from '../../assets/images/service/MejocareHome.png'
import MalangHome from '../../assets/images/service/MalangHome.png'

import Star from '../../assets/icons/star.svg'
import FramerLogo from '../../assets/icons/framer-logo.svg'
import FigmaLogo from '../../assets/icons/figma-logo.svg'
import LottieLogo from '../../assets/icons/lottie-logo.svg'
import VsLogo from '../../assets/icons/vs-logo.svg'

import StrideHome from '../../assets/icons/stride-home.svg'

import BlockOne from '../../assets/icons/service-block/block-one.svg'
import BlockTwo from '../../assets/icons/service-block/block-two.svg'
import BlockThree from '../../assets/icons/service-block/block-three.svg'
import MiddleBlockCircle from '../../assets/icons/service-block/middle-block-circle.svg'

import MnvrNoti from '../../assets/icons/mnvr-noti.svg'
import Avatar1Noti from '../../assets/icons/avatar1-noti.svg'
import Avatar2Noti from '../../assets/icons/avatar2-noti.svg'

const Service = () => {
  return (
    <section id="services" className={styles.service_container}>

      <div className={styles.service_header_container}>
        <h2 className={styles.service_title}>Services</h2>
        <p className={styles.service_header_subtitle}>Everything you need to outmaneuver the competition</p>
        <p className={styles.service_header_description}>Every move we make is intentional - designed to position your brand, engage your users & drive performance.</p>
      </div>

      <div className={styles.service_content_wrapper}>

        <div className={`${styles.service_card_one} ${styles.service_card}`}>
          <div className={styles.service_card_content}>
            <h3 className={styles.service_card_title}>Websites that speak for you</h3>
            <p className={styles.service_card_desc}>Custom websites that reflect your brand, guide your users, and drive real results - no templates, no guesswork.</p>
          </div>

          <div className={styles.service_card_animation}>
            <img className={styles.service_card_img_one} src={PMCHome} alt="PMCHome" />
            <img className={styles.service_card_img_one} src={MejocareHome} alt="MejocareHome" />
            <img className={styles.service_card_img_one} src={MalangHome} alt="MalangHome" />
            <img className={styles.service_card_img_one} src={NomondayHome} alt="NomondayHome" />
          </div>
        </div>

        <div className={`${styles.service_card_two} ${styles.service_card}`}>
          <div className={styles.service_card_animation}>
            <img className={styles.service_card_star_two} src={Star} alt="star circle" />

            <div className={styles.service_card_animation_icons}>
              <div className={styles.service_card_icon_two}>
                <img className={styles.icon} src={FramerLogo} alt="Framer Logo" />
              </div>
              <div className={styles.service_card_icon_two}>
                <img className={styles.icon} src={FigmaLogo} alt="Figma Logo" />
              </div>
              <div className={styles.service_card_icon_two}>
                <img className={styles.icon} src={LottieLogo} alt="Lottie Logo" />
              </div>
              <div className={styles.service_card_icon_two}>
                <img className={styles.icon} src={VsLogo} alt="VS Code Logo" />
              </div>
            </div>

          </div>
          <div className={styles.service_card_content}>
            <h3 className={styles.service_card_title}>Designs That Mesmerize</h3>
            <p className={styles.service_card_desc}>We craft beautiful, on-brand interfaces with seamless UX - designed to guide, engage, and convert without ever getting in the way.</p>
          </div>
        </div>

        <div className={`${styles.service_card_three} ${styles.service_card}`}>
          <div className={styles.service_card_content}>
            <h3 className={styles.service_card_title}>Apps That Feel Effortless</h3>
            <p className={styles.service_card_desc}>Clean, intuitive app design built for real-world use - beautiful on the outside, seamless underneath.</p>
          </div>

          <div className={styles.service_card_animation}>
            <img className={styles.service_card_stride_three} src={StrideHome} alt="Stride Home" />
          </div>
        </div>

        <div className={`${styles.service_card_four} ${styles.service_card}`}>
          <div className={styles.service_card_content}>
            <h3 className={styles.service_card_title}>Built to Rank, Ready to Grow</h3>
            <p className={styles.service_card_desc}>Our SEO work ensures your digital presence gets seen by the right people - fast-loading pages, optimized structure, and content that ranks.</p>
          </div>

          <div className={styles.service_card_animation}>
            <img className={styles.service_card_four_block_one} src={BlockOne} alt="block 1" />

            <div className={styles.service_card_four_middle_block_wrapper}>
              <img className={styles.service_card_four_circle} src={MiddleBlockCircle} alt="circle" />
              <img className={styles.service_card_four_block_two} src={BlockTwo} alt="block 2" />
            </div>

            <img className={styles.service_card_four_block_three} src={BlockThree} alt="block 3" />
          </div>
        </div>

        <div className={`${styles.service_card_five} ${styles.service_card}`}>

          <div className={styles.service_card_content}>
            <h3 className={styles.service_card_title}>Launches That Hit the Ground Running</h3>
            <p className={styles.service_card_desc}>Optimized, polished, and supported beyond launch - we make sure you're set to scale from day one.</p>
          </div>

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
        </div>

      </div>
    </section>
  )
}

export default Service