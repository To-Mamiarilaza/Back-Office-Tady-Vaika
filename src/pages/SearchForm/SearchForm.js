import LandingStat from "../../components/LandingPage/LandingStat";
import "./landingPage.css";

export default function SearchForm() {
  return (
    <>
      <div className="container landing-page search-page showing mx-auto">
        <div className="row pb-4 text-center overflow-hidden">
          <div className="landing-title search-title fade-in">
            Trouver votre voiture
          </div>

          <div className="landing-description search-description moving-up delay-0">
            Vous pouvez entrer ici les caracteristiques du voiture que vous
            voulez avoir
          </div>

          <div className="form mt-5">
            <form action="">
              <input
                type="text"
                className="big-custom-input"
                placeholder="ENTRER VOTRE RECHERCHE"
              />
            </form>
          </div>

          <div className="call-action search-action mt-5 moving-up delay-1">
            <button className="red-button">RECHERCHER</button>
          </div>
        </div>
        <div className="light-stat d-flex justify-content-center mt-5 mb-5">
          <LandingStat nombre={5} description={"UTILISATEURS"} />
          <LandingStat nombre={20} description={"ANNONCES"} />
          <LandingStat nombre={6} description={"VENDUES"} />
        </div>
      </div>
    </>
  );
}
