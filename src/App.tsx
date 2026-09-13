import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AdditionalResourcesPage } from "./pages/AdditionalResourcesPage/AdditionalResourcesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/additional-resources",
    element: <AdditionalResourcesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
