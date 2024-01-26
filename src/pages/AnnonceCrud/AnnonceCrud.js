import React, { useEffect, useState } from "react";
import "./crudAnnonce.css";
import AnnonceCrudRow from "../../components/AnnonceCrud/AnnonceCrudRow";
import TypeAnnonceService from "../../services/TypeAnnonceService";
import { useNavigate } from "react-router";
import AnnonceUpdateModal from "../../components/AnnonceCrud/AnnonceUpdateModal";
import AnnonceInsertionModal from "../../components/AnnonceCrud/AnnonceInsertionModal";
import $ from "jquery";

function AnnonceCrud() {
  const navigate = useNavigate();
  const [typeAnnonces, setTypeAnnonces] = useState([]);
  const [updateAnnonce, setUpdateAnnonce] = useState(null);
  const [seed, setSeed] = useState(0);

  if (localStorage.getItem("token") == null) {
    navigate("/login");
  }

  useEffect(() => {
    TypeAnnonceService.getAllTypeAnnonces().then((response) => {
      if (response.data.message == "success") {
        setTypeAnnonces(response.data.data);
      }
    });
  }, []);

  const onDeleteHandler = (idTypeAnnonce) => {
    TypeAnnonceService.deleteTypeAnnonce(idTypeAnnonce)
      .then((response) => {
        if (response.data.message == "success") {
          setTypeAnnonces(
            typeAnnonces.filter((type) => type.id != idTypeAnnonce)
          );
        } else {
          alert(response.data.data);
        }
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  const onAnnonceUpdate = (commission, modal) => {
    TypeAnnonceService.updateTypeAnnonce(commission.id, commission)
    .then((response) => {
      let index = typeAnnonces.findIndex((type) => type.id === commission.id);
      typeAnnonces.splice(index, 1, commission);
      setTypeAnnonces(typeAnnonces);

      setSeed(Math.random());
    })
    .catch((error) => {
      console.log(error);
      navigate("/login");
    })
  }

  const onAnnonceInsertion = (annonce) => {
    TypeAnnonceService.insertTypeAnnonce(annonce)
    .then((response) => {
      typeAnnonces.push(response.data.data);
      setSeed(Math.random());
    })
    .catch((error) => {
      console.log(error);
      navigate("/login");
    })

  }

  const rows = [];

  typeAnnonces.forEach((typeAnnonce) => {
    rows.push(
      <AnnonceCrudRow
        key={typeAnnonce.id}
        typeAnnonce={typeAnnonce}
        onDeleteFunction={onDeleteHandler}
        onUpdateFunction={setUpdateAnnonce}
      />
    );
  });

  return (
    <>
      <AnnonceInsertionModal onAnnonceInsertion={onAnnonceInsertion} />
      <AnnonceUpdateModal updateAnnonce={updateAnnonce} onAnnonceUpdate={onAnnonceUpdate} />

      <div className="container crud-annonce-div mx-auto mt-4">
        <div className="col-md-10 mx-auto">
          <div className="card stat-section">
            <div className="row px-3">
              <h4 className="card-title">Gestion des types d'annonces</h4>
              <div className="mt-3 p-0">
                <button
                  className="red-button"
                  data-bs-toggle="modal"
                  data-bs-target="#insertionModal"
                >
                  Nouvelle type d'annonce
                </button>
              </div>
              <table className="table mt-3 pending-list">
                <thead>
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Type d'annonce</th>
                    <th>Commission</th>
                    <th>Niveau</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnnonceCrud;
