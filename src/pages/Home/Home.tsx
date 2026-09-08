import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Hero } from "../../components/Hero/Hero";
import { Technologies } from "../../components/Technologies/Technologies";
import { CourseFilesTable } from "../../components/CourseFilesTable/CourseFilesTable";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Technologies/>
      <CourseFilesTable/>
    </MainLayout>
  );
};
