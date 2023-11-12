import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { MainDashLayout } from "./components/molecules";
import MainSidebar from "./components/molecules/Sidebars/MainSidebar";
import {
  CategoriesRoutes,
  DashboardRoutes,
  OverviewMain,
  PostsRoutes,
  ProductRoutes,
} from "./components/pages";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={Routes.dashboard.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full  justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <DashboardRoutes />
            </MainDashLayout>
          }
        >
          <Route element={<DashboardRoutes />} index></Route>
        </Route>
        <Route
          path={Routes.dashboard.posts.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <PostsRoutes />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.categories.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <OverviewMain />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.products.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <ProductRoutes />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.setting.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <CategoriesRoutes />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.setting.root}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <OverviewMain />
            </MainDashLayout>
          }
        />
      </Router>
    </BrowserRouter>
  );
}

export default App;
