import "./App.css";
import "./template.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/fonts/fontawesome-free-6.5.1-web/css/all.css";

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import Template from "./Template";

export default function App() {

  return (
    <>
    {/* Test */}
      <Router>
        <Routes>
          <Route path="/login" exact Component={LoginPage} />
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
