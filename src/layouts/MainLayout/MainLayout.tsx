import React from "react";
import styles from "./MainLayout.module.scss";
import Navbar from "../../components/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
