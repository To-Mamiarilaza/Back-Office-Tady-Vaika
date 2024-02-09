import { useEffect, useState } from "react";
import ModeleService from "../../services/ModeleService";

export default function ModelFilterComponent({ modeleFilterHandler }) {
  const [modeles, setModeles] = useState([]);

  useEffect(() => {
    ModeleService.getAllModeles().then((response) => {
      if (response.data.message == "success") {
        setModeles(response.data.data);
      }
    });
  }, []);

  const rows = [];
  modeles.forEach((modele) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => modeleFilterHandler(modele.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {modele.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="modeleAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Modele
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#modeleAccordion"
          >
            <div className="accordion-body">
              <div className="row">{rows}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
