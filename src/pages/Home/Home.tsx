import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Hero } from "../../components/Hero/Hero";
import { Technologies } from "../../components/Technologies/Technologies";
import { CourseFilesTable } from "../../components/CourseFilesTable/CourseFilesTable";
import { Feedback } from "../../components/Feedback/Feedback";
import { AdditionalResources } from "../../components/AdditionalResources/AdditionalResources";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <CourseFilesTable />
      <Feedback />
      <AdditionalResources/>
    </MainLayout>
  );
};
