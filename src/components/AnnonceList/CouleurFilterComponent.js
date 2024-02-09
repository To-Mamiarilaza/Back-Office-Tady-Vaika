import { useEffect, useState } from "react";
import CouleurService from "../../services/CouleurService";

export default function CouleurFilterComponent({ couleurFilterHandler }) {
  const [couleurs, setCouleurs] = useState([]);

  useEffect(() => {
    CouleurService.getAllCouleurs().then((response) => {
      if (response.data.message == "success") {
        setCouleurs(response.data.data);
      }
    });
  }, []);

  const rows = [];
  couleurs.forEach((couleur) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input color-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() => couleurFilterHandler(couleur.id)}
            style={{backgroundColor: couleur.rgb}}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {couleur.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="CouleurAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Couleur
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#CouleurAccordion"
          >
            <div className="accordion-body">
              <div className="row">
               {rows}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
