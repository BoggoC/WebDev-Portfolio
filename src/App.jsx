import { useFetchData } from "./components/fetchData";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { HomeLayout, HomePage, ThreeJsProjectsPage } from "./routes/routeIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "threeJsProjects",
        element: <ThreeJsProjectsPage />,
      },
    ],
  },
]);

const App = () => {
  const { loading } = useFetchData();
  if (loading) {
    return <section className="loading"></section>;
  }
  return <RouterProvider router={router} />;
};

export default App;
