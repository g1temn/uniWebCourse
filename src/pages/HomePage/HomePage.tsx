import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Hero } from "../../components/Hero/Hero";
import { Technologies } from "../../components/Technologies/Technologies";
import { CourseFilesTable } from "../../components/CourseFilesTable/CourseFilesTable";
import { Feedback } from "../../components/Feedback/Feedback";
import { Faq } from "../../components/Faq/Faq";

export const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <CourseFilesTable />
      <Faq />
      <Feedback />
    </MainLayout>
  );
};
