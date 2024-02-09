import { useNavigate } from "react-router-dom";
import FormatUtil from "../../services/FormatUtil";
import PhotoGallery from "./PhotoGallery";
import ValidationSection from "./ValidationSection";
import FavoriteSection from "./FavoriteSection";
import UserProfileMapping from "../../services/UserProfileMapping";

export default function CarDescription({ annonceDetail, images }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="description p-5">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="marque">{annonceDetail.nomMarque}</h4>
          <h4 className={ annonceDetail.status == 20 ? ("etat vendue") : ("etat attente") }>{ annonceDetail.status == 20 ? ("Vendue") : ("Non vendue") }</h4>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h4 className="model">{annonceDetail.nomModele.toUpperCase()}</h4>
          <h4 className="price">
            {FormatUtil.toMoneyFormat(annonceDetail.prixVente)} AR
          </h4>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h4 className="version">Version {annonceDetail.version}</h4>
          <h4 className="numero">{annonceDetail.numero}</h4>
        </div>

        <PhotoGallery images={images} />

        <div className="desc mt-5 row">
          <div className="col-md-7">
            <h4 className="card-title">DESCRIPTION</h4>
            <hr />
            <p className="text">{annonceDetail.description}</p>
            <button className="red-button" onClick={() => navigate("/user/" + annonceDetail.idUsers + "/profile/" + annonceDetail.id )} >Voir le proprietaire</button>
          </div>

          {sessionStorage.getItem("profile") == UserProfileMapping.ADMIN && (
            <ValidationSection annonceDetail={annonceDetail} />
          )}

          {sessionStorage.getItem("profile") == UserProfileMapping.USER && (
            <FavoriteSection  idAnnonce={annonceDetail.id}/>
          )}

        </div>
      </div>
    </>
  );
}
