import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import { PrivateRoutes } from "./components/pages/dashboard/privateRoutes/idnex";
import Routes from "./routes";
import { LogIn, SignIn } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={"*"}
          element={
            <PrivateRoutes isAuthenticated userRoles={["user", "admin"]} />
          }
        />
        <Route path={Routes.login.root} element={<LogIn />} />
        <Route path={Routes.signIn.root} element={<SignIn />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
