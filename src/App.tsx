import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { MainDashLayout } from "./components/molecules";
import MainSidebar from "./components/molecules/Sidebars/MainSidebar";
import { DashboardRoutes } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={"dashboard"}
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <div>asds</div>
            </MainDashLayout>
          }
        >
          <Route element={<div>Dashboard</div>} index></Route>
          <Route element={<div>Dashboard</div>} path={"products"}></Route>
          <Route element={<div>Dashboard</div>} path={"settings"}></Route>
        </Route>
        <Route
          path="*"
          element={
            <MainDashLayout
              header={
                <div className="w-full justify-center flex h-[40px]">
                  Navbar
                </div>
              }
              sidebar={<MainSidebar />}
            >
              <DashboardRoutes />
            </MainDashLayout>
          }
        />
      </Router>
    </BrowserRouter>
  );
}

export default App;
