import React from "react";
import styles from "./Faq.module.scss";
import faqData from "../../content/faq.json";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const faqItems = faqData.items as FaqItem[];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleNavy}>{faqData.titleFirst}</span>{" "}
          <span className={styles.titleOrange}>{faqData.titleSecond}</span>
        </h2>
        <p className={styles.subtitle}>{faqData.subtitle}</p>
      </div>

      <div className={styles.listBlock}>
        <ul className={styles.questionsList}>
          {faqItems.map((item) => (
            <li key={item.id} className={styles.questionItem}>
              <span className={styles.questionText}>{item.question}</span>

              <ul className={styles.answersList}>
                <li className={styles.answerItem}>
                  <span className={styles.answerText}>{item.answer}</span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
