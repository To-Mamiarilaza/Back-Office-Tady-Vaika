import { useEffect, useState } from "react";
import TypeMoteurService from "../../services/TypeMoteurService";

export default function TypeMoteurFilterComponent({ typeMoteurFilterHandler }) {
  const [typeMoteurs, setTypeMoteurs] = useState([]);

  useEffect(() => {
    TypeMoteurService.getAllTypeMoteurs().then((response) => {
      if (response.data.message == "success") {
        setTypeMoteurs(response.data.data);
      }
    });
  }, []);

  const rows = [];
  typeMoteurs.forEach((typeMoteur) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => typeMoteurFilterHandler(typeMoteur.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {typeMoteur.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="CarrosserieAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Type du moteur
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#CarrosserieAccordion"
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
