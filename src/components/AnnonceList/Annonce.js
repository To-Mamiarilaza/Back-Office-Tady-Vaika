import FormatUtil from "../../services/FormatUtil";
import car2 from "../../assets/images/car/car2.jpg";
import car3 from "../../assets/images/car/car3.jpg";
import { useNavigate } from "react-router-dom";

export default function Annonce({id, image, marque, modele, version, taille, transmission, usage, price}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="annonce-card" onClick={() => navigate("/annonces/" + id)}>
        <div className="image">
          <img src={image} alt="" />
          {/* <div className="favorite">
            <i className="fas fa-star turn-icon"></i>
          </div> */}
        </div>
        <div className="px-2">
          <div className="d-flex mt-3 marque">
            <div className="me-3">{marque}</div>
            <div className="me-4">{modele}</div>
            <div className="version">v {version}</div>
          </div>
          <div className="d-flex categorie mt-3 mb-3">
            <div>{taille}</div>
            <div>{transmission}</div>
            <div>{usage}</div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="price">AR {FormatUtil.toMoneyFormat(price)}</div>
            <div className="action">
              <button className="action-button" onClick={() => navigate("/annonces/" + id)}>
                <i className="fas fa-plus-circle me-2"></i>En savoir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
