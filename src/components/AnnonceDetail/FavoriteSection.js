import { useEffect, useState } from "react";
import AnnonceFavorisService from "../../services/AnnonceFavorisService";

export default function FavoriteSection({ idAnnonce }) {
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    AnnonceFavorisService.checkIfFavorite(idAnnonce).then((response) => {
      if (response.data.message == "success") {
        setIsFavorite(response.data.data);
      }
    });
  }, []);

  var buttonClass = "btn-outline-danger";
  var starIcon = "far fa-star";
  var label = "Marquer comme favoris";

  if (isFavorite != null) {
    buttonClass = "btn-danger";
    starIcon = "fas fa-star";
    label = "Enlever des favoris";
  }

  const handleFavorisAction = () => {
    console.log("ETAT : " + isFavorite);
    if (isFavorite == null) {
      AnnonceFavorisService.markAsFavorite(
        idAnnonce,
        sessionStorage.getItem("idUser")
      ).then((response) => {
        AnnonceFavorisService.checkIfFavorite(idAnnonce).then((response) => {
          console.log(response);
          if (response.data.message == "success") {
            setIsFavorite(response.data.data);
          }
        });
      });
    } else {
      AnnonceFavorisService.removeFromFavorite(isFavorite).then((response) => {
        setIsFavorite(null);
      });
    }
  };

  return (
    <>
      <div className="col-md-5">
        <div className="mt-0 px-4 text-center">
          <button
            className={"btn " + buttonClass + " btn-sm pe-3"}
            onClick={() => handleFavorisAction()}
          >
            <i className={"far " + starIcon + " mx-2"}></i>
            {label}
          </button>
        </div>
      </div>
    </>
  );
}
