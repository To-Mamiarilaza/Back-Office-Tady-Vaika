import { useEffect, useState } from "react";
import TailleService from "../../services/TailleService";

export default function TailleFilterComponent({ tailleFilterHandler }) {
  const [tailles, setTailles] = useState([]);

  useEffect(() => {
    TailleService.getAllTailles().then((response) => {
      if (response.data.message == "success") {
        setTailles(response.data.data);
      }
    });
  }, []);

  const rows = [];
  tailles.forEach((taille) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => tailleFilterHandler(taille.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {taille.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="TailleAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Taille
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#TailleAccordion"
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
