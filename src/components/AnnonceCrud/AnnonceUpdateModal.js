import { Modal } from "bootstrap";
import { useEffect, useReducer, useRef, useState } from "react";

export default function AnnonceUpdateModal({updateAnnonce, onAnnonceUpdate}) {
  const [id, setId] = useState(0);
  const [nom, setNom] = useState("");
  const [commission, setCommission] = useState(0);
  const [niveau, setNiveau] = useState(0);


  useEffect(() => {
    if (updateAnnonce != null) {
      setId(updateAnnonce.id);
      setNom(updateAnnonce.nom);
      setCommission(updateAnnonce.commission);
      setNiveau(updateAnnonce.niveau);
    }


  }, [updateAnnonce])

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const annonce = {
      id: id,
      nom: nom,
      commission: commission,
      niveau: niveau,
      status: 0
    };

    onAnnonceUpdate(annonce);
  }

  return (
    <>
      <div
        className="modal fade crud-annonce-div"
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">
                Modifier une annonce
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {updateAnnonce !== null && (
              <>
                <form action="">
                  <div className="modal-body">
                    <div className="form-group mb-3">
                      <label for="" className="form-label">
                        ID
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        name="idTypeAnnonce"
                        id="updateId"
                        value={id}
                        readOnly
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="form-label">
                        Type d'annonce
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        name="typeAnnonce"
                        id="updateName"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="form-label">
                        Commission
                      </label>
                      <input
                        type="number"
                        className="form-control custom-input"
                        value={commission}
                        id="commissionId"
                        step={0.1}
                        onChange={(e) => setCommission(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="form-label">
                        Niveau
                      </label>
                      <input
                        type="number"
                        className="form-control custom-input"
                        name="niveau"
                        id="niveauId"
                        value={niveau}
                        onChange={(e) => setNiveau(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="red-button cancel-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" data-bs-dismiss="modal"  onClick={onSubmitHandler} className="red-button">
                      Modifier
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
