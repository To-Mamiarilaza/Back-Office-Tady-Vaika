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

  useEffect(() => {
    AnnonceService.getAllAnnonces().then((response) => {
      const test = [
        {id: 1, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 2, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 3, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 4, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 5, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 6, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 7, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 8, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 9, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 10, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 11, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 12, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 13, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 14, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 15, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 16, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
        {id: 17, dateAnnonce: '2024-10-23', nomMarque: 'test', nomModele: 'modele', description: 'desc', nomUsers: 'nom', prenomUsers: 'Prenom', prixVente: '1000'},
      ];

      setAnnonces(test);

      // setAnnonces(response.data);
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
                <li className="page-item">
                  <a
                    className="page-link"
                    type="button"
                    onClick={() => previousPagination()}
                  >
                    Previous
                  </a>
                </li>
                {paginationButtons}
                <li className="page-item">
                  <a className="page-link" type="button" onClick={() => nextPagination()}>
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
