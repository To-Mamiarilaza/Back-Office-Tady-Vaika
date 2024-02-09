import { useEffect, useState } from "react";
import UsageService from "../../services/UsageService";

export default function UsageFilterComponent({usageFilterHandler}) {
  const [usages, setUsages] = useState([]);

  useEffect(() => {
    UsageService.getAllUsages().then((response) => {
      if (response.data.message == "success") {
        setUsages(response.data.data);
      }
    });
  }, []);

  const rows = [];
  usages.forEach((usage) => {
    rows.push(
      <>
        <div className="filter-check col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            onChange={() => usageFilterHandler(usage.id)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            {usage.nom}
          </label>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="accordion" id="UsageAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Usage
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#UsageAccordion"
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
