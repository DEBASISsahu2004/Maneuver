import styles from './value.module.css';

import CardOneBg from '../../assets/icons/value-card1/bg.svg'
import CardOneMain from '../../assets/icons/value-card1/main.svg'

import CommentOne from '../../assets/icons/value-card2/comment1.svg'
import CommentTwo from '../../assets/icons/value-card2/comment2.svg'
import CommentThree from '../../assets/icons/value-card2/comment3.svg'
import StickyNote from '../../assets/icons/value-card2/sticky-note.svg'

import TypeFaces from '../../assets/icons/value-card3/typefaces.svg'
import ColorTags from '../../assets/icons/value-card3/colour-tags.svg'
import Cursor from '../../assets/icons/value-card3/cursor.svg'
import ColorTag1 from '../../assets/icons/value-card3/colour-tag1.svg'
import ColorTag2 from '../../assets/icons/value-card3/colour-tag2.svg'
import ColorTag3 from '../../assets/icons/value-card3/colour-tag3.svg'

import MalangHome4 from '../../assets/icons/value-card4/malang.svg'
import MejocareHome4 from '../../assets/icons/value-card4/mejocare.svg'
import NotiOne4 from '../../assets/icons/value-card4/notification1.svg'
import NotiTwo4 from '../../assets/icons/value-card4/notification2.svg'

import AvatarGroup from '../../assets/icons/value-card5/avatar-group.svg'
import ConversationGroup from '../../assets/icons/value-card5/conversation-group.svg'

import Statistics from '../../assets/icons/value-card6/statistics.svg'
import Noti6 from '../../assets/icons/value-card6/notification.svg'

const Value = () => {
    return (
        <section id="values" className={styles.value_container}>
            <div className={styles.value_header_container}>
                <h2 className={styles.value_title}>Values</h2>
                <p className={styles.value_header_subtitle}>What sets us apart?</p>
                <p className={styles.value_header_description}>We don't just deliver - we think, build, and evolve with purpose. Here's what defines the way we work.</p>
            </div>

            <div className={styles.value_content_wrapper}>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Strategic Approach</h3>

                    <div className={styles.value_card_animation}>
                        <img className={styles.value_card_one_bg} src={CardOneBg} alt="value_bg_animation" />
                        <div className={styles.value_card_animation_main}>
                            <img className={styles.value_card_one_main} src={CardOneMain} alt="value_main_animation" />
                        </div>
                    </div>

                    <p className={styles.value_card_desc}>Every project starts with clarity. We define your goals, map the user journey, and design with precision - not assumptions.</p>
                </div>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Creative Ideas</h3>
                    <div className={styles.value_card_animation}>
                        <div className={styles.value_card_two_bg}>
                            <img className={styles.comment_one} src={CommentOne} alt="comment 1" />
                            <img className={styles.comment_two} src={CommentTwo} alt="comment 2" />
                            <img className={styles.comment_three} src={CommentThree} alt="comment 3" />
                        </div>

                        <div className={styles.value_card_animation_main}>
                            <img className={styles.value_card_two_main} src={StickyNote} alt="sticky note" />
                        </div>
                    </div>
                    <p className={styles.value_card_desc}>We're not here to just execute. We bring insight, challenge the obvious, and push for what makes your product unforgettable.</p>
                </div>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Intentional Design</h3>
                    <div className={styles.value_card_animation}>
                        <div className={styles.value_card_three_bg}>
                            <img className={styles.color_tag_one} src={ColorTag1} alt="color tag 1" />
                            <img className={styles.color_tag_two} src={ColorTag2} alt="color tag 2" />
                            <img className={styles.color_tag_three} src={ColorTag3} alt="color tag 3" />
                        </div>

                        <div className={styles.value_card_animation_main}>
                            <div className={styles.value_three_typeface_container}>
                                <img className={styles.type_faces} src={TypeFaces} alt="typefaces" />
                                <img className={styles.cursor} src={Cursor} alt="cursor" />
                            </div>

                            <img className={styles.value_three_color_tags} src={ColorTags} alt="color tags" />
                        </div>
                    </div>
                    <p className={styles.value_card_desc}>We craft clean, brand-aligned visuals that guide attention, build trust, and elevate every click and scroll.</p>
                </div>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Flawless Execution</h3>

                    <div className={styles.value_card_animation}>
                        <div className={styles.value_card_four_bg}>
                            <img className={styles.mejocare} src={MejocareHome4} alt="mejocare" />
                            <img className={styles.malang} src={MalangHome4} alt="malang" />
                        </div>

                        <div className={styles.value_card_animation_main}>
                            <img className={styles.value_card_four_notification1} src={NotiOne4} alt="notification 1" />

                            <img className={styles.value_card_four_notification2} src={NotiTwo4} alt="notification 1" />
                        </div>
                    </div>

                    <p className={styles.value_card_desc}>We move fast, but never loose. Sharp code, seamless handoffs, and a delivery process that respects both detail and deadline.</p>
                </div>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Collaborative Spirit</h3>

                    <div className={styles.value_card_animation}>
                        <img className={styles.value_card_five_bg} src={AvatarGroup} alt="avatar group" />

                        <div className={styles.value_card_animation_main}>
                            <img className={styles.value_card_five_conversation} src={ConversationGroup} alt="conversation group" />
                        </div>
                    </div>

                    <p className={styles.value_card_desc}>You're part of this. We work transparently, speak plainly, and build on shared vision — not guesswork.</p>
                </div>

                <div className={styles.value_card}>
                    <h3 className={styles.value_card_title}>Ongoing Support</h3>

                    <div className={styles.value_card_animation}>
                        <div className={styles.value_card_six_bg} />
                        <div className={styles.value_card_animation_main}>
                            <img className={styles.value_card_six_statistics} src={Statistics} alt="statistics" />
                            <img className={styles.value_card_six_notification} src={Noti6} alt="notification" />
                        </div>
                    </div>

                    <p className={styles.value_card_desc}>Our work doesn't end at launch. We stay close, fine-tune when needed, and keep your product running like it should.</p>
                </div>
            </div>
        </section>
    )
}

export default Value