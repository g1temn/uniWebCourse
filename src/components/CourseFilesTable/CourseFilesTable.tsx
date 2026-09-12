import React from "react";
import styles from "./CourseFilesTable.module.scss";
import filesData from "../../content/courseFiles.json";

interface CourseFile {
  fileName: string;
  fileUrl?: string;
  description: string;
}

export const CourseFilesTable: React.FC = () => {
  const files: CourseFile[] = filesData as CourseFile[];

  return (
    <section className={styles.tableSection} id="CourseFilesTable">
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>
          Матеріали <span>курсу</span>
        </h2>
        <p className={styles.subtitle}>
          Основні файли дисципліни "Вебтехнології та вебдизайн"
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.courseTable}>
          <thead>
            <tr>
              <th className={styles.indexColumn}>№</th>
              <th className={styles.titleColumn}>Назва файлу</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index + 1}>
                <td className={styles.indexColumn}>{index + 1}</td>
                <td className={styles.titleColumn}>
                  {file.fileUrl ? (
                    <a
                      href={file.fileUrl}
                      download
                      className={styles.downloadLink}
                    >
                      {file.fileName}
                    </a>
                  ) : (
                    <span className={styles.fileNameText}>{file.fileName}</span>
                  )}
                </td>
                <td>{file.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CourseFilesTable;