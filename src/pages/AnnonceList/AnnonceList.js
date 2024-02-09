import "./annonceList.css";
import { useEffect, useRef, useState } from "react";
import AnnonceListContainer from "../../components/AnnonceList/AnnonceListContainer";
import FilterContainer from "../../components/AnnonceList/FilterContainer";
import AnnonceService from "../../services/AnnonceService";

export default function AnnonceList() {
  const filterToogleButtonRef = useRef();
  const filterToogleLabelRef = useRef();
  const filterRef = useRef();
  const [filter, setFilter] = useState(null);

  document.title = "Annonces"

  const [annonces, setAnnonces] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [nbAnnonces, setNbAnnonces] = useState(0);

  const paginationSize = 6;

  useEffect(() => {
    if (filter == null) {
      AnnonceService.getAllPublishedAnnonce(pageIndex, paginationSize)
      .then((response) => {
        if (response.data.message == "success") {
          setAnnonces(response.data.data.content);
          setNbAnnonces(response.data.data.totalElements);
        }
      });
    } else {
      AnnonceService.getFilteredAnnonces(filter)
      .then((response) => {
        if (response.data.message == "success") {
          setAnnonces(response.data.data);
          console.log(response.data.data);
          setNbAnnonces(response.data.data.length);
        }
      });
    }
  }, [pageIndex, filter]);

  const switchFilterState = () => {
    var filterToogleButton = filterToogleButtonRef.current;
    var filterToogleLabel = filterToogleLabelRef.current;
    var filtre = filterRef.current;

    var expanded = filterToogleButton.getAttribute("aria-expanded");

    if (expanded === "false") {
      filterToogleButton.setAttribute("aria-expanded", "true");
      filterToogleLabel.innerText = "Masquer les filtres";
      filtre.classList.remove("hide");
      filtre.classList.add("show-filter");
    } else {
      filterToogleButton.setAttribute("aria-expanded", "false");
      filterToogleLabel.innerText = "Afficher les filtres";
      filtre.classList.add("hide");
      filtre.classList.remove("show-filter");
    }
  };

  return (
    <>
      <div className="container annonces mx-auto p-4 mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="title">LES ANNONCES RECENTS</h4>
          <div className="filtre-action">
            <button
              className="me-3"
              ref={filterToogleButtonRef}
              onClick={() => switchFilterState()}
              aria-expanded="false"
            >
              <i className="fas fa-filter me-3"></i>
              <span ref={filterToogleLabelRef}>Afficher les filtres</span>
            </button>
          </div>
        </div>

        <div className="page-content position-relative">
          <AnnonceListContainer annonces={annonces} nbAnnonces={nbAnnonces} pageIndex={pageIndex} setPageIndex={setPageIndex} size={paginationSize} />

          <div ref={filterRef} className="filtres mt-4">
            <FilterContainer setActiveFilter={setFilter} />
          </div>
        </div>
      </div>
    </>
  );
}
