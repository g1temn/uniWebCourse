import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AdditionalResourcesPage } from "./pages/AdditionalResourcesPage/AdditionalResourcesPage";
import { ProfessorsPage } from "./pages/ProfessorsPage/ProfessorsPage";
import paths from "./content/routesNames.json";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.additionalResources,
    element: <AdditionalResourcesPage />,
  },
  {
    path: paths.professors,
    element: <ProfessorsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
