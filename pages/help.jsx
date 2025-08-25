import FAQs from "@/components/FAQs";
import styles from "../styles/faqs.module.css";

const Help = () => {
    return ( 
        <>
        <section id={styles.hero}>
            <div className={styles.heroContent}>
                <header>
                    <h2>How Can We Help You?</h2>
                    <div className={styles.headerLine}></div>
                    <p>We are here for you. If you have any question or anything is now working, you can answers here.</p>
                </header>
                <div className={styles.fagContent}>
                    <div className={styles.faqCard}>
                        <div className={styles.faqCardTop}>
                            <img src="/" alt="" />
                        </div>
                        <div className={styles.faqCardBottom}>
                            <p>How to register on EatNow</p>
                            <div className={styles.readTime}>5 min read</div>
                        </div>
                    </div>
                    <div className={styles.faqCard}>
                        <div className={styles.faqCardTop}>
                            <img src="/" alt="" />
                        </div>
                        <div className={styles.faqCardBottom}>
                            <p>How to register on EatNow</p>
                            <div className={styles.readTime}>5 min read</div>
                        </div>
                    </div>
                    <div className={styles.faqCard}>
                        <div className={styles.faqCardTop}>
                            <img src="/" alt="" />
                        </div>
                        <div className={styles.faqCardBottom}>
                            <p>How to register on EatNow</p>
                            <div className={styles.readTime}>5 min read</div>
                        </div>
                    </div>
                    <div className={styles.faqCard}>
                        <div className={styles.faqCardTop}>
                            <img src="/" alt="" />
                        </div>
                        <div className={styles.faqCardBottom}>
                            <p>How to register on EatNow</p>
                            <div className={styles.readTime}>5 min read</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FAQs />
        </>
     );
}
 
export default Help;