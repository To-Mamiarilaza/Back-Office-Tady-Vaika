import { useEffect, useState } from "react";
import MarqueService from "../../services/MarqueService";

export default function MarqueFilterComponent({ marqueFilterHandler }) {
  const [marques, setMarques] = useState([]);

  useEffect(() => {
    MarqueService.getAllMarques().then((response) => {
      if (response.data.message == "success") {
        setMarques(response.data.data);
      }
    });
  }, []);

  const rows = [];
  marques.forEach((marque) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => marqueFilterHandler(marque.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {marque.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Marque
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
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
