import { useNavigate } from "react-router-dom";
import landingImage from "../../assets/images/car/landing1.png";
import location from "../../assets/images/location.png";
import LandingStat from "../../components/LandingPage/LandingStat";
import "./landingPage.css";
import { useEffect, useState } from "react";
import LandingPageService from "../../services/LandingPageService";

export default function LandingPage() {
  const navigate = useNavigate();

  document.title = "Jery Vaika Accueil";

  const [nbUser, setNbUser] = useState(0);
  const [nbVendue, setNbVendue] = useState(0);
  const [nbAnnonces, setNbAnnonces] = useState(0);

  useEffect(() => {
    LandingPageService.getLandingPageStat()
    .then((response) => {
      setNbUser(response.data.data[0].nbUtilisateurs);
      setNbVendue(response.data.data[0].nbVendues);
      setNbAnnonces(response.data.data[0].nbAnnonces);
    })
  }, [])

  return (
    <>
      <div
        className="container landing-page mx-auto showing"
        id="animationContainer"
        tabindex="0"
      >
        <div className="row pb-4">
          <div className="col-md-7 position-relative overflow-hidden">
            <img
              className="landing-image image-slide"
              src={landingImage}
              alt=""
            />
            <img
              className="landing-image-background bg-fade-in close-up"
              src={location}
              alt=""
            />
          </div>
          <div className="col-md-5 close-up">
            <div className="page-section  fade-in">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div className="overflow-hidden">
              <div className="landing-title moving-up delay-0">
                La destination pour
                <br /> des voitures d'occasion
              </div>

              <div className="landing-description moving-up delay-1">
                Nous engageons à rendre la recherche et l' achat d'une voiture
                d'occasion aussi simple et agréable que possible. Découvrez
                notre vaste sélection de véhicules d'occasion de qualité.
              </div>

              <div className="call-action moving-up delay-2">
                <button className="red-button" onClick={() => navigate("/annonces/list")}>Voir les annonces</button>
                <button className="red-button white-button">A propos</button>
              </div>
            </div>
          </div>
        </div>

        <div className="light-stat d-flex justify-content-center mt-5 mb-5">
          <LandingStat nombre={nbUser} description={"UTILISATEURS"} />
          <LandingStat nombre={nbAnnonces} description={"ANNONCES"} />
          <LandingStat nombre={nbVendue} description={"VENDUES"} />
        </div>
      </div>
    </>
  );
}
