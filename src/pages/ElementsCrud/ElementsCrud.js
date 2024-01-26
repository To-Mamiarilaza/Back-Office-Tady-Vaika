import CarroserieCard from "../../components/ElementsCrud/TypeMoteurCard";
import CouleurCard from "../../components/ElementsCrud/CouleurCard";
import EnergieCard from "../../components/ElementsCrud/EnergieCard";
import TailleCard from "../../components/ElementsCrud/TailleCard";
import TransmissionCard from "../../components/ElementsCrud/TransmissionCard";
import UsageCard from "../../components/ElementsCrud/UsageCard";
import "./crudElement.css";
import TypeMoteurCard from "../../components/ElementsCrud/TypeMoteurCard";
import MarqueCard from "../../components/ElementsCrud/MarqueCard";
import ModeleCard from "../../components/ElementsCrud/ModeleCard";
import { useNavigate } from "react-router-dom";

export default function ElementsCrud() {
  const navigate = useNavigate();

  if (localStorage.getItem("token") == null) {
    navigate("/login");
  }

  return (
    <>
      <div className="container crud-element-div row mx-auto mt-4 mb-4">
        <div>
          <h4 className="page-title">
            Gestion des caracteristiques d'une voiture
          </h4>
          <hr />
          <div className="crud-nav">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              aria-current="true"
              data-bs-slide-to="0"
              className="nav-item active"
            >
              <i className="far fa-dot-circle"></i>Marque & Modele
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              aria-current="true"
              data-bs-slide-to="1"
              className="nav-item active"
            >
              <i className="far fa-dot-circle"></i>Energie & Transmission
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              className="nav-item"
            >
              <i className="far fa-dot-circle"></i>Taille & Usage
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              className="nav-item"
            >
              <i className="far fa-dot-circle"></i>Moteur & Couleur
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                data-bs-interval="100000000"
              >
                {/* ENERGIE ET TRANSMISSION */}
                <div className="row">
                  <MarqueCard />
                  <ModeleCard />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="100000000">
                {/* ENERGIE ET TRANSMISSION */}
                <div className="row">
                  <EnergieCard />
                  <TransmissionCard />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="100000000">
                {/* TAILLE ET USAGE */}
                <div className="row">
                  <TailleCard />
                  <UsageCard />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="100000000">
                {/* TYPE MOTEUR ET COULEUR */}
                <div className="row">
                  <TypeMoteurCard />
                  <CouleurCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
