import { useState } from "react";

export default function AnnonceInsertionModal({onAnnonceInsertion}) {
  const [nom, setNom] = useState("");
  const [commission, setCommission] = useState(0);
  const [niveau, setNiveau] = useState(0);

  const onInsertHandler = (e) => {
    e.preventDefault();

    const annonce = {
        nom: nom,
        commission: commission,
        niveau: niveau,
        status: 0
    };

    onAnnonceInsertion(annonce);

  }

  return (
    <>
      <div
        className="modal fade crud-annonce-div"
        id="insertionModal"
        tabIndex="-1"
        aria-labelledby="insertionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="insertionModalLabel">
                Nouvelle type d'annonce
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="">
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label className="form-label">
                    Type d'annonce
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    name="typeAnnonce"
                    value={nom}
                    onChange={(e) => {
                      setNom(e.target.value);
                    }}
                    placeholder="Nom du type d'annonce"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">
                    Commission
                  </label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    name="commission"
                    value={commission}
                    onChange={(e) => {
                      setCommission(e.target.value);
                    }}
                    placeholder="Commission"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">
                    Niveau
                  </label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    name="niveau"
                    value={niveau}
                    onChange={(e) => {
                      setNiveau(e.target.value);
                    }}
                    placeholder="Niveau"
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
                <button type="submit" data-bs-dismiss="modal"  onClick={onInsertHandler} className="red-button">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
