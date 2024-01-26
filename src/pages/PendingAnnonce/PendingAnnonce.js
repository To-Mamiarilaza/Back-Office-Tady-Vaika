import React, { useEffect, useState } from "react";
import "./pendingAnnonce.css";
import PendingAnnonceRow from "../../components/PendingAnnonce/PendingAnnonceRow";
import AnnonceService from "../../services/AnnonceService";
import { error } from "jquery";

function PendingAnnonce() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    AnnonceService.getAllAnnonces().then((response) => {
      setAnnonces(response.data);
    });
  }, []);

  const rows = [];
  annonces.forEach((annonce) => {
    if (annonce.status == 0) {
        rows.push(<PendingAnnonceRow annonce={annonce} />);
    }
  });

  return (
    <>
      <div className="container pending-annonces mx-auto mt-4">
        <div className="card stat-section">
          <div className="row px-3">
            <h4 className="card-title">Annonces en attentes de valiation</h4>
            <h4 className="card-description">
              Ces annonces ne sont pas encore vue publiquement
            </h4>
            <table className="table mt-3 pending-list">
              <thead>
                <tr className="table-dark">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Voiture</th>
                  <th>Description</th>
                  <th>Proprietaire</th>
                  <th className="prix">Prix</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>

            <div className="pagination">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
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
