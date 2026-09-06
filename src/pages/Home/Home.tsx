import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { Hero } from "../../components/Hero/Hero";
import { Technologies } from "../../components/Technologies/Technologies";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Technologies/>
    </MainLayout>
  );
};
