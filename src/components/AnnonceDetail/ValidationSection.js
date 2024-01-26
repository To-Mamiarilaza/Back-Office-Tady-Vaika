import { useState } from "react";
import AnnonceService from "../../services/AnnonceService";
import { useNavigate } from "react-router-dom";

export default function ValidationSection({ annonceDetail }) {
    const navigate = useNavigate();
    const [seed, setSeed] = useState(0);

    if (localStorage.getItem("token") == null) {
        navigate("/login");
    }

    const onStatusChangeHandler = (status) => {
        AnnonceService.updateAnnonceStatus(annonceDetail, status)
        .then((response) => {
            if (response.data.message == "success") {
                setSeed(Math.random());
            }
            else if (response.data.message == "error") {
              navigate("/login");
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    return (
    <>
      <div className="col-md-5">
        <h4 className="card-title">VALIDATION</h4>
        <hr />
        {annonceDetail.status == 0 && (
          <>
            <button onClick={() => onStatusChangeHandler(10)} className="btn btn-success validate-button me-4">
              <i className="fas fa-check me-2"></i>
              Valider
            </button>
            <button onClick={() => onStatusChangeHandler(-10)} className="btn btn-danger">
              <i className="fas fa-times me-2"></i>
              Refuser
            </button>
          </>
        )}

        {annonceDetail.status >= 10 && (
          <>
            <button className="btn btn-success w-100 validate-button">
              Valide
            </button>
          </>
        )}

        {annonceDetail.status == -10 && (
          <>
            <button className="btn btn-danger w-100">
              Refuse
            </button>
          </>
        )}
      </div>
    </>
  );
}
