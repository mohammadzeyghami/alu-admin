import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { MainDashLayout, NavbarDashboardMain } from "./components/molecules";
import MainSidebar from "./components/molecules/Sidebars/mainSidebar";
import {
  DashboardRoutes,
  OverviewMain,
  PostsRoutes,
  ProductRoutes,
  UsersRoots,
} from "./components/pages";
import Routes from "./routes";
import { MainRightbar } from "./components/molecules/Sidebars/mainRightbar";
import { EditUser } from "./components/pages/dashboard/setting";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={Routes.dashboard.root}
          element={
            <MainDashLayout
              header={<NavbarDashboardMain />}
              sidebar={<MainSidebar />}
              rightBar={<MainRightbar />}
            >
              <DashboardRoutes />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.users.root}
          element={
            <MainDashLayout
              header={<NavbarDashboardMain />}
              sidebar={<MainSidebar />}
              rightBar={<MainRightbar />}
            >
              <UsersRoots />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.posts.root}
          element={
            <MainDashLayout
              header={<NavbarDashboardMain />}
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
              header={<NavbarDashboardMain />}
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
              header={<NavbarDashboardMain />}
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
              header={<NavbarDashboardMain />}
              sidebar={<MainSidebar />}
            >
              <EditUser />
            </MainDashLayout>
          }
        />
        <Route
          path={Routes.dashboard.setting.root}
          element={
            <MainDashLayout
              header={<NavbarDashboardMain />}
              sidebar={<MainSidebar />}
            >
              <OverviewMain />
            </MainDashLayout>
          }
        />
        <Route
          path={"*"}
          element={
            <MainDashLayout
              header={<NavbarDashboardMain />}
              sidebar={<MainSidebar />}
            >
              <PostsRoutes />
            </MainDashLayout>
          }
        />
      </Router>
    </BrowserRouter>
  );
}

export default App;
