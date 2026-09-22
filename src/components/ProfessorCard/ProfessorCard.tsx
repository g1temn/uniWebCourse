import React from "react";
import styles from "./ProfessorCard.module.scss";

interface ProfessorCardProps {
  name: string;
  title: string;
  role: string;
  image: string;
}

export const ProfessorCard: React.FC<ProfessorCardProps> = ({
  name,
  title,
  role,
  image,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`Фото викладача ${name}`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <span className={styles.role}>{role}</span>
      </div>
    </article>
  );
};
