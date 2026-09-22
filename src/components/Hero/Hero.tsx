import heroContent from "../../content/hero.json";
import { Button } from "../UI/Button/Button";
import styles from "./Hero.module.scss";
import heroImage from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import routesNames from "../../content/routesNames.json";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgCircleOne}></div>
      <div className={styles.bgCircleTwo}></div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            {heroContent.badge}
          </div>

          <h1 className={styles.title}>
            {heroContent.titlePart1} <br />
            <span className={styles.highlight}>{heroContent.titlePart2}</span>
          </h1>

          <p className={styles.description}>{heroContent.description}</p>

          <div className={styles.actions}>
            <a href="#Technologies">
              <Button variant="primary">{heroContent.buttons.primary}</Button>
            </a>
            <Link to={routesNames.additionalResources}>
              <Button variant="primary">
                {heroContent.buttons.additionalResources}
              </Button>
            </Link>
            <Link to={routesNames.professors}>
              <Button variant="primary">
                {heroContent.buttons.professors}
              </Button>
            </Link>
            <a href="#CourseFilesTable">
              <Button variant="secondary">
                {heroContent.buttons.secondary}
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.imageCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <img
              src={heroImage}
              alt="Ілюстрація курсу"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
