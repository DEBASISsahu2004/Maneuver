import styles from './faqs.module.css'
import Star from '../../assets/icons/faq/star-group.svg'
import Add from '../../assets/icons/faq/add.svg'
import Subtract from '../../assets/icons/faq/subtract.svg'
import { useState } from 'react';

const faqs = [
    {
        question: "What's your typical project timeline?",
        answer: "Timelines depend on the project scope, but most websites take 3-6 weeks and apps 6-10 weeks. We'll share a clear roadmap before we start."
    },
    {
        question: "Can you redesign my existing website/app?",
        answer: "Absolutely. We love breathing new life into brands — whether it's a UI refresh or a full structural overhaul."
    },
    {
        question: "Do you provide SEO services?",
        answer: "Yes. Every site we build is optimized for speed, mobile-friendliness, and SEO best practices. We also offer deeper SEO audits if needed."
    },
    {
        question: "How do we communicate during the project?",
        answer: "We use Slack, Notion, or email for regular updates - whatever works best for you. Expect weekly check-ins and transparent progress tracking."
    },
    {
        question: "What if I only need design or development - not both?",
        answer: "No problem. We're flexible. You can hire us for just UI/UX design or just development, depending on your team's needs."
    },
    {
        question: "How do we get started?",
        answer: "Just reach out through our contact form or email. We'll set up a discovery call, learn more about your project, and go from there."
    }
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className={styles.faqs_container}>
            <div className={styles.faqs_header_container}>
                <h2 className={styles.faqs_title}>Frequently Asked Questions</h2>
                <p className={styles.faqs_header_subtitle}>Still Wondering?</p>
                <p className={styles.faqs_header_description}>We believe in transparency, not surprises. Here's what most clients ask us before starting.</p>
            </div>

            <div className={styles.faqs_content_wrapper}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faq_item} onClick={() => handleToggle(index)}>
                        <div className={styles.faq_question_container}>
                            <h3 className={styles.faq_question}>{faq.question}</h3>
                            <img
                                className={styles.faq_icon}
                                src={openIndex === index ? Subtract : Add}
                                alt="toggle icon"
                                style={{ transform: openIndex === index ? 'rotate(180deg)' : 'none' }}
                            />
                        </div>
                        <p className={`${styles.faq_answer} ${openIndex === index ? styles.active : styles.inactive}`}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
                <img className={styles.faqs_stars} src={Star} alt="star group" />
            </div>
        </section>
    )
}

export default Faqs