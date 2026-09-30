import React, { useState } from "react";
import styles from "./VideoStack.module.scss";
import stackData from "../../content/videoStack.json";

export interface CourseVideoItem {
  id: string;
  tech: string;
  windowTitle: string;
  courseTitle: string;
  author: string;
  duration: string;
  description: string;
  thumbnailUrl: string;
  courseUrl: string;
  docsUrl: string;
  variant: "box1" | "box2" | "box3" | string;
}

export const VideoStack: React.FC = () => {
  const courses = stackData.courses as CourseVideoItem[];
  const [activeId, setActiveId] = useState<string>(
    courses[courses.length - 1].id,
  );

  const handleCardClick = (
    e: React.MouseEvent<HTMLElement>,
    courseId: string,
  ) => {
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    setActiveId(courseId);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleNavy}>{stackData.titleFirst}</span>{" "}
          <span className={styles.titleOrange}>{stackData.titleSecond}</span>
        </h2>

        <div className={styles.hintBanner}>
          <p>{stackData.subtitle}</p>
        </div>

        <div className={styles.quickTabs}>
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              className={`${styles.tabBtn} ${
                activeId === course.id ? styles.tabBtnActive : ""
              }`}
              onClick={() => setActiveId(course.id)}
            >
              {course.tech}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.absoluteContainer}>
        {courses.map((course, index) => {
          const isActive = activeId === course.id;
          const variantClass = styles[course.variant] || styles.box1;
          const tabCourseUrl = course.courseUrl;

          return (
            <article
              key={course.id}
              className={`${styles.box} ${variantClass} ${
                isActive ? styles.activeWindow : ""
              }`}
              onClick={(e) => handleCardClick(e, course.id)}
            >
              <div className={styles.windowBar}>
                <div className={styles.windowDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <span className={styles.windowPath}>{course.windowTitle}</span>
                <span className={styles.techBadge}>{course.tech}</span>
              </div>

              <div className={styles.previewWrapper}>
                <img
                  src={course.thumbnailUrl}
                  alt={course.courseTitle}
                  className={styles.thumbnail}
                  loading="lazy"
                />
                <div className={styles.previewOverlay}>
                  <a
                    href={tabCourseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.playButton}
                    aria-label={`Дивитися курс ${course.tech} у новій вкладці`}
                  >
                    ▶ Дивитися курс
                  </a>
                  <span className={styles.durationBadge}>
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className={styles.windowContent}>
                <div className={styles.courseHeader}>
                  <h3 className={styles.courseTitle}>{course.courseTitle}</h3>
                  <span className={styles.courseAuthor}>{course.author}</span>
                </div>

                <p className={styles.courseDescription}>{course.description}</p>

                <div className={styles.actions}>
                  <a
                    href={tabCourseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    Перейти до відеокурсу ↗
                  </a>
                  <a
                    href={course.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryLink}
                  >
                    Документація {course.tech} (UA)
                  </a>
                </div>
              </div>

              <div className={styles.statusBar}>
                <span>STATUS: READY</span>
                <span>WINDOW #{index + 1}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.modernRounded}>
        <span>{stackData.bottomNote}</span>
      </div>
    </section>
  );
};

export default VideoStack;
