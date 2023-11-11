import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";

import { MainDashLayout } from "./components/molecules";
import MainSidebar from "./components/molecules/Sidebars/MainSidebar";

function App() {
  const router = createBrowserRouter([
    {
      path: Routes.overview.root,
      element: (
        <MainDashLayout
          header={
            <div className="w-full justify-center flex h-[40px]">Navbar</div>
          }
          sidebar={<MainSidebar />}
        >
          <div>asds</div>
        </MainDashLayout>
      ),
    },
    {
      path: Routes.categories.root,
      element: (
        <MainDashLayout
          header={
            <div className="w-full justify-center flex h-[40px]">Navbar</div>
          }
          sidebar={<MainSidebar />}
        >
          <div>asds</div>
        </MainDashLayout>
      ),
    },
    {
      path: Routes.posts.root,
      element: (
        <MainDashLayout
          header={
            <div className="w-full justify-center flex h-[40px]">Navbar</div>
          }
          sidebar={<MainSidebar />}
        >
          <div>asds</div>
        </MainDashLayout>
      ),
    },
    {
      path: Routes.products.root,
      element: (
        <MainDashLayout
          header={
            <div className="w-full justify-center flex h-[40px]">Navbar</div>
          }
          sidebar={<MainSidebar />}
        >
          <div>asds</div>
        </MainDashLayout>
      ),
    },
    {
      path: Routes.setting.root,
      element: (
        <MainDashLayout
          header={
            <div className="w-full justify-center flex h-[40px]">Navbar</div>
          }
          sidebar={<MainSidebar />}
        >
          <div>asds</div>
        </MainDashLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
