import { useState } from "react";

export default function DateFilterComponent({ dateFilterHandler }) {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  
  return (
    <>
      <div className="accordion" id="accordionDate">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDate">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDate"
              aria-expanded="false"
              aria-controls="collapseDate"
            >
              Date
            </button>
          </h2>
          <div
            id="collapseDate"
            className="accordion-collapse collapse"
            aria-labelledby="headingDate"
            data-bs-parent="#accordionDate"
          >
            <div className="accordion-body">
              <div className="price-filter">
                <label for="prix" className="forch-label">
                  Filtre par date :
                </label>
                <div className="d-flex mt-2">
                  <input type="date" onChange={(e) => setMinDate(e.target.value)} />
                  <input type="date" className="ms-3" onChange={(e) => setMaxDate(e.target.value)} />
                </div>
                <div className="valider">
                  <button className="btn btn-danger btn-sm " onClick={() => dateFilterHandler(minDate, maxDate)}>Valider</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
