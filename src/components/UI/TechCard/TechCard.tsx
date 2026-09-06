import React from "react";
import styles from "./TechCard.module.scss";

interface TechCardProps {
  title: string;
  description: string;
  iconSrc?: string;
  articleUrl: string;
}

export const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  iconSrc,
  articleUrl,
}) => {
  return (
    <a className={styles.card} href={articleUrl}>
      <div className={styles.imageWrapper}>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={`${title} ілюстрація`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
};
