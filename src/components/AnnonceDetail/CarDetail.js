import FormatUtil from "../../services/FormatUtil";

export default function CarDetail({ annonceDetail }) {
  return (
    <>
      <div className="detail pt-5 px-3">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
              >
                CATEGORIE
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Energie</div>
                    <div className="detail-content">
                      {annonceDetail.nomEnergie}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Transmission</div>
                    <div className="detail-content">
                      {annonceDetail.nomTransmission}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Couleur</div>
                    <div className="detail-content">
                      {annonceDetail.nomCouleur}
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Taille</div>
                    <div className="detail-content">
                      {annonceDetail.nomTaille}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Usage</div>
                    <div className="detail-content">
                      {annonceDetail.nomUsage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne2"
                aria-expanded="false"
                aria-controls="flush-collapseOne2"
              >
                DETAILS
              </button>
            </h2>
            <div
              id="flush-collapseOne2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne2"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Consommation</div>
                    <div className="detail-content">
                      {annonceDetail.consommation} L / 100
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Km effectue</div>
                    <div className="detail-content">
                      {FormatUtil.toMoneyFormat(annonceDetail.kmEffectue)} Km
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Place</div>
                    <div className="detail-content">
                      {annonceDetail.nbPlace}
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Vitesse</div>
                    <div className="detail-content">
                      {annonceDetail.nbVitesse}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Puissance</div>
                    <div className="detail-content">
                      {annonceDetail.puissance} Ch
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="detail-title">Type de moteur</div>
                    <div className="detail-content">
                      {annonceDetail.nomTypeMoteur}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne3"
                aria-expanded="false"
                aria-controls="flush-collapseOne3"
              >
                ETATS DES PIECES
              </button>
            </h2>
            <div
              id="flush-collapseOne3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne3"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body pt-3">
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Moteur</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatMoteur + "%" }}
                        aria-valuenow={annonceDetail.etatMoteur}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatMoteur}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Freinage</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatFreinage + "%" }}
                        aria-valuenow={annonceDetail.etatFreinage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatFreinage}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Transmission</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatTransmission + "%" }}
                        aria-valuenow={annonceDetail.etatTransmission}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatTransmission}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Pneu</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatPneu + "%" }}
                        aria-valuenow={annonceDetail.etatPneu}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatPneu}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Electronique</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatElectronique + "%" }}
                        aria-valuenow={annonceDetail.etatElectronique}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatElectronique}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center mb-3">
                  <div className="col-md-4 piece">Suspension</div>
                  <div className="col-md-8 etat">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: annonceDetail.etatSuspension + "%" }}
                        aria-valuenow={annonceDetail.etatSuspension}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {annonceDetail.etatSuspension}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
