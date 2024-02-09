import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import PendingAnnonce from "./pages/PendingAnnonce/PendingAnnonce";
import AnnonceDetail from "./pages/AnnonceDetail/AnnonceDetail";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserAnnonces from "./pages/UserAnnonces/UserAnnonces";
import ElementsCrud from "./pages/ElementsCrud/ElementsCrud";
import AnnonceCrud from "./pages/AnnonceCrud/AnnonceCrud";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchForm from "./pages/SearchForm/SearchForm";
import AnnonceList from "./pages/AnnonceList/AnnonceList";
import { useState } from "react";
import UserProfileMapping from "./services/UserProfileMapping";

export default function Template() {
  const navigate = useNavigate();

  const [messageIdOtherUser, setMessageIdOtherUser] = useState(0);

  return (
    <>
      <div className="sidebar">
        {/* FOR ADMIN */}
        {sessionStorage.getItem("profile") == UserProfileMapping.ADMIN && (
          <>
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
              <i className="far fa-clock"></i>
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
              <i className="fas fa-file-invoice"></i>
              <div className="link-name">ANNONCE</div>
            </a>
          </>
        )}

        {/* FOR CONNECTED OR NOT CONNECTED USER */}
        {sessionStorage.getItem("profile") != UserProfileMapping.ADMIN && (
          <>
            <a type="button" onClick={() => navigate("/search")} className="sidebar-link sidebar-link-red">
              <i className="fas fa-search"></i>
            </a>
            <a
              type="button"
              onClick={() => navigate("/")}
              className="sidebar-link"
            >
              <i className="fas fa-chart-line"></i>
              <div className="link-name">HOME</div>
            </a>
            <a
              type="button"
              className="sidebar-link"
              onClick={() => navigate("/annonces/list")}
            >
              <i className="fas fa-file-invoice"></i>
              <div className="link-name">ANNONCES</div>
            </a>
          </>
        )}

        {/* FOR CONNECTED OR NOT CONNECTED USER */}
        {sessionStorage.getItem("profile") == UserProfileMapping.USER && (
          <>
            <a
              type="button"
              className="sidebar-link"
              onClick={() => navigate("/annonces/list")}
            >
              <i className="fas fa-star"></i>
              <div className="link-name">FAVORIS</div>
            </a>
          </>
        )}

      </div>

      <div className="content">
        <Header
          messageIdOtherUser={messageIdOtherUser}
          setMessageIdOtherUser={setMessageIdOtherUser}
        />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/annonces/pending" element={<PendingAnnonce />} />
          <Route path="/annonces/:id" element={<AnnonceDetail />} />
          <Route
            path="/user/:id/profile/:annonce"
            element={
              <UserProfile setMessageIdOtherUser={setMessageIdOtherUser} />
            }
          />
          <Route
            path="/user/:id/profile"
            element={
              <UserProfile setMessageIdOtherUser={setMessageIdOtherUser} />
            }
          />
          <Route path="/user/:id/annonces" element={<UserAnnonces />} />
          <Route
            path="/user/:id/annonces/:annonce"
            element={<UserAnnonces />}
          />
          <Route path="/annonce/crud" element={<AnnonceCrud />} />
          <Route path="/elements/crud" element={<ElementsCrud />} />

          {/* ROUTE FOR THE FRONT OFFICE */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/annonces/list" element={<AnnonceList />} />
        </Routes>
      </div>
    </>
  );
}
