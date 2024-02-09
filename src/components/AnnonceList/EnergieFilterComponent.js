import { useEffect, useState } from "react";
import EnergieService from "../../services/EnergieService";

export default function EnergieFilterComponent({energieFilterHandler}) {
  const [energies, setEnergies] = useState([]);

  useEffect(() => {
    EnergieService.getAllEnergies().then((response) => {
      if (response.data.message == "success") {
        setEnergies(response.data.data);
      }
    });
  }, []);

  const rows = [];
  energies.forEach((energie) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => energieFilterHandler(energie.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {energie.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="EnergieAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Energie
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#EnergieAccordion"
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
