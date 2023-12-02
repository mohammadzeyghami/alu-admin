import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import { PrivateRoutes } from "./components/pages/dashboard/privateRoutes/idnex";
import Routes from "./routes";
import { LogIn, SignIn } from "./components";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={"*"}
          element={
            <PrivateRoutes
              isAuthenticated={isAuthenticated}
              userRoles={["user", "admin"]}
            />
          }
        />
        <Route path={Routes.login.root} element={<LogIn />} />
        <Route path={Routes.signIn.root} element={<SignIn />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
