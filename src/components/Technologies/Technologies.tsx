import techContent from '../../content/technologies.json';
import { TechCard } from '../UI/TechCard/TechCard';
import styles from './Technologies.module.scss';

import figmaImg from '../../assets/images/figma.png';
import htmlImg from '../../assets/images/html5.png';
import cssImg from '../../assets/images/css3.png';

const iconMap: Record<string, string> = {
  figma: figmaImg,
  html: htmlImg,
  css: cssImg,
};

export const Technologies = () => {
  return (
    <section className={styles.section} id="Technologies">
      <div className={styles.container}>
        <h2 className={styles.title}>{techContent.sectionTitle}</h2>
        
        <div className={styles.grid}>
          {techContent.technologies.map((tech) => (
            <TechCard 
              key={tech.id}
              title={tech.title}
              description={tech.description}
              iconSrc={iconMap[tech.id]}
              articleUrl={tech.articleUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};