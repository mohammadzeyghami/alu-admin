import { Route, Routes as Router } from "react-router-dom";
import { lazy } from "react";
import { MainDashLayout, NavbarDashboardMain } from "../../..";
//lazy loading
const DashboardRoutes = lazy(
  () => import("../../../pages/dashboard/root/index")
);

const OverviewMain = lazy(
  () => import("../../../pages/dashboard/overview/main")
);
const PostsRoutes = lazy(() => import("../../../pages/dashboard/posts/main"));
const ProductRoutes = lazy(
  () => import("../../../pages/dashboard/products/main")
);
const UsersRoots = lazy(() => import("../../../pages/dashboard/users/root"));
//componenets
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
