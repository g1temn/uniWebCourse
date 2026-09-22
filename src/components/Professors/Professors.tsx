import React from "react";
import { ProfessorCard } from "../ProfessorCard/ProfessorCard";
import styles from "./Professors.module.scss";
import data from "../../content/professors.json";

export const Professors: React.FC = () => {
  return (
    <section className={styles.professorsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{data.sectionTitle}</h2>
        <div className={styles.grid}>
          {data.professors.map((prof) => (
            <ProfessorCard
              key={prof.id}
              name={prof.name}
              title={prof.title}
              role={prof.role}
              image={prof.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
