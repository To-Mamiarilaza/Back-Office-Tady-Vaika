import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import PendingAnnonce from "./pages/PendingAnnonce/PendingAnnonce";
import AnnonceDetail from "./pages/AnnonceDetail/AnnonceDetail";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserAnnonces from "./pages/UserAnnonces/UserAnnonces";
import ElementsCrud from "./pages/ElementsCrud/ElementsCrud";
import AnnonceCrud from "./pages/AnnonceCrud/AnnonceCrud";

export default function Template() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar">
        <a type="button" className="sidebar-link sidebar-link-red">
          <i className="fas fa-search"></i>
        </a>
        <a
          type="button"
          onClick={() => navigate("/dashboard")}
          className="sidebar-link"
        >
          <i className="fas fa-chart-line"></i>
          <div className="link-name">DASHBOARD</div>
        </a>
        <a
          type="button"
          className="sidebar-link"
          onClick={() => navigate("/annonces/pending")}
        >
          <i class="far fa-clock"></i>
          <div className="link-name">EN ATTENTES</div>
        </a>
        <a
          type="button"
          className="sidebar-link"
          onClick={() => navigate("/elements/crud")}
        >
          <i className="fas fa-cog"></i>
          <div className="link-name">ELEMENTS</div>
        </a>
        <a
          type="button"
          className="sidebar-link"
          onClick={() => navigate("/annonce/crud")}
        >
          <i class="fas fa-file-invoice"></i>
          <div className="link-name">ANNONCE</div>
        </a>
      </div>

      <div className="content">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/annonces/pending" element={<PendingAnnonce />} />
          <Route path="/annonces/:id" element={<AnnonceDetail />} />
          <Route path="/user/:id/profile/:annonce" element={<UserProfile />} />
          <Route path="/user/:id/profile" element={<UserProfile />} />
          <Route path="/user/:id/annonces" element={<UserAnnonces />} />
          <Route
            path="/user/:id/annonces/:annonce"
            element={<UserAnnonces />}
          />
          <Route path="/annonce/crud" element={<AnnonceCrud />} />
          <Route path="/elements/crud" element={<ElementsCrud />} />
        </Routes>
      </div>
    </>
  );
}
