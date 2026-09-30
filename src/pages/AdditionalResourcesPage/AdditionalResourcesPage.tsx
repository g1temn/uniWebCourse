import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { AdditionalResources } from "../../components/AdditionalResources/AdditionalResources";
import { VideoStack } from "../../components/VIdeoStack/VideoStack";

export const AdditionalResourcesPage = () => {
  return (
    <MainLayout>
      <AdditionalResources />
      <VideoStack />
    </MainLayout>
  );
};
