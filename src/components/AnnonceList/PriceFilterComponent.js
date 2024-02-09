import { useState } from "react";

export default function PriceFilterComponent({priceFilterHandler}) {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');


  return (
    <>
      <div className="accordion" id="accordionPrice">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingPrice">
            <button
                className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePrice"
              aria-expanded="false"
              aria-controls="collapsePrice"
            >
              Prix
            </button>
          </h2>
          <div
            id="collapsePrice"
            className="accordion-collapse collapse"
            aria-labelledby="headingPrice"
            data-bs-parent="#accordionPrice"
          >
            <div className="accordion-body">
              <div className="price-filter">
                <label for="prix" className="forch-label">
                  Sélectionnez une fourchette de prix :
                </label>
                <div className="d-flex mt-2">
                  <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                  <input type="number" value={maxPrice} className="ms-3" onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
                <div className="valider">
                  <button className="btn btn-danger btn-sm" onClick={() => priceFilterHandler(minPrice, maxPrice)}>Valider</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
