import "./App.css";
import "./template.css";
import "./assets/fonts/fontawesome-free-6.5.1-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import Template from "./Template";
import UserLoginPage from "./pages/LoginPage/UserLoginPage";

export default function App() {

  return (
    <>
    {/* Test */}
      <Router>
        <Routes>
          {/* Login for the front office */}
          <Route path="/login" exact Component={UserLoginPage} />
          {/* Login for the back office */}
          <Route path="/admin" exact Component={LoginPage} />
          <Route
            path="/*"
            exact
            element={
              <Template />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
