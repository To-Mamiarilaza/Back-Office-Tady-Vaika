import React, { useEffect, useState } from "react";
import "./pendingAnnonce.css";
import PendingAnnonceRow from "../../components/PendingAnnonce/PendingAnnonceRow";
import AnnonceService from "../../services/AnnonceService";
import { error } from "jquery";
import { useNavigate } from "react-router-dom";
import PaginationButton from "../../components/PendingAnnonce/PaginationButton";

function PendingAnnonce() {
  const [annonces, setAnnonces] = useState([]);
  const [currentIndice, setCurrentIndice] = useState(1);

  const navigate = useNavigate();

  if (localStorage.getItem("token") == null) {
    navigate("/login");
  }

  document.title = "Annonce en attente";

  useEffect(() => {
    AnnonceService.getPendingAnnonces().then((response) => {
      setAnnonces(response.data);
    });
  }, []);


  // PAGINATION PARAMETER
  const nbRow = 8;

  const rows = [];
  const beginIndice = (nbRow * (currentIndice - 1));
  const endIndice = (nbRow * (currentIndice)) - 1;
  
  const currentRows = annonces.slice(beginIndice, endIndice + 1);
  currentRows.forEach((annonce) => {
        rows.push(<PendingAnnonceRow annonce={annonce} />);
  });

  const paginationButtons = [];
  const nbButtons = Math.ceil(annonces.length / nbRow);

  for (let i = 0; i < nbButtons; i++) {
    paginationButtons.push(
      <PaginationButton indice={i+1} changeIndice={setCurrentIndice}/>
    )
  }

  const nextPagination = () => {
    if (currentIndice < nbButtons) {
      setCurrentIndice(currentIndice + 1);
    }
  }

  const previousPagination = () => {
    if (currentIndice > 1) {
      setCurrentIndice(currentIndice - 1);
    }
  }

  return (
    <>
      <div className="container pending-annonces mx-auto mt-4">
        <div className="card stat-section">
          <div className="row px-3">
            <h4 className="card-title">Annonces en attente de validation</h4>
            <h4 className="card-description">
            Ces annonces ne sont pas encore visibles publiquement
            </h4>
            <table className="table mt-3 pending-list">
              <thead>
                <tr className="table-dark">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Voiture</th>
                  <th>Description</th>
                  <th>Propriétaire</th>
                  <th className="prix">Prix</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>

            <div className="pagination">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    type="button"
                    onClick={() => previousPagination()}
                  >
                    Retour
                  </a>
                </li>
                {paginationButtons}
                <li className="page-item">
                  <a className="page-link" type="button" onClick={() => nextPagination()}>
                    Suivant
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingAnnonce;
