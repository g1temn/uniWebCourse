import React, { useState, useRef, useEffect } from "react";
import styles from "./AdditionalResources.module.scss";
import resourcesData from "../../content/additionalResources.json";
import additionalResourcesImg from "../../assets/images/additional_resources.png";
import { MapArea } from "../MapArea/MapArea";

export const AdditionalResources: React.FC = () => {
  const [activeResourceId, setActiveResourceId] = useState<string>(
    resourcesData.resources[0].id
  );
  
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const imgRef = useRef<HTMLImageElement>(null);

  const activeResource =
    resourcesData.resources.find((r) => r.id === activeResourceId) ||
    resourcesData.resources[0];

  useEffect(() => {
    const updateScale = () => {
      if (imgRef.current) {
        const currentWidth = imgRef.current.clientWidth;
        const currentHeight = imgRef.current.clientHeight;
        
        setScale({
          x: currentWidth / resourcesData.mapConfig.baseSize.width,
          y: currentHeight / resourcesData.mapConfig.baseSize.height,
        });
      }
    };

    const observer = new ResizeObserver(updateScale);
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    updateScale();

    return () => observer.disconnect();
  }, []);

  const handleAreaClick = (
    e: React.MouseEvent<HTMLAreaElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveResourceId(id);
  };

  return (
    <section className={styles.resourcesPage}>
      <h1 className={styles.title}>
        {resourcesData.pageTitleStart} <span>{resourcesData.pageTitleHighlight}</span>
      </h1>

      <p className={styles.instruction}>{resourcesData.instruction}</p>

      <div className={styles.container}>
        <div className={styles.mapSection}>
          <div className={styles.imageWrapper}>
            <img
              ref={imgRef}
              src={additionalResourcesImg}
              alt={resourcesData.mapConfig.altText}
              useMap={`#${resourcesData.mapConfig.name}`}
              onLoad={() => window.dispatchEvent(new Event('resize'))}
            />
            <map name={resourcesData.mapConfig.name}>
              {resourcesData.resources.map((resource) => (
                <MapArea
                  key={resource.id}
                  shape={resource.area.shape}
                  baseCoords={resource.area.baseCoords}
                  alt={resource.area.alt}
                  tooltip={resource.area.tooltip}
                  scaleX={scale.x}
                  scaleY={scale.y}
                  onClick={(e) => handleAreaClick(e, resource.id)}
                />
              ))}
            </map>
          </div>

          <div className={styles.activeResourceInfo}>
            <h3>{activeResource.title}</h3>
            <p>{activeResource.description}</p>
          </div>
        </div>

        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <iframe
              src={activeResource.videoUrl}
              title={activeResource.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};