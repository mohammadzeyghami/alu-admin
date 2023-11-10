import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Dashboard } from "./components/pages";

function App() {
  const router = createBrowserRouter([
    {
      path: Routes.dashboard.root,
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
