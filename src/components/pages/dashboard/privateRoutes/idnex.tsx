import { Route, Routes as Router } from "react-router-dom";
import {
  DashboardRoutes,
  MainDashLayout,
  NavbarDashboardMain,
  OverviewMain,
  PostsRoutes,
  ProductRoutes,
  UsersRoots,
} from "../../..";
import MainSidebar from "../../../molecules/Sidebars/mainSidebar";
import { MainRightbar } from "../../../molecules/Sidebars/mainRightbar";
import Routes from "../../../../routes";
import { EditUser } from "../setting";
interface MyPrivateprops {
  isAuthenticated: boolean;
  userRoles: string[];
}
const PrivateRoutes = ({
  isAuthenticated = true,
  userRoles,
}: MyPrivateprops) => {
  if (isAuthenticated) {
    console.log(userRoles);
    return (
      <Router>
        <Route
          path={"*"}
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
      </Router>
    );
  }
};

export { PrivateRoutes };
