import Annonce from "./Annonce";
import AnnoncePagination from "./AnnoncePagination";
import PaginationButton from "../PendingAnnonce/PaginationButton";

export default function AnnonceListContainer({ annonces, nbAnnonces, pageIndex, setPageIndex, size }) {

  const rows = [];
  annonces.forEach(annonce => {
    rows.push(
      <Annonce id={annonce.id} image={annonce.image} marque={annonce.nomMarque} modele={annonce.nomModele} version={annonce.version} taille={annonce.nomTaille} transmission={annonce.nomTransmission} usage={annonce.nomUsage} price={annonce.prixVente} />
    )
  })

  const nbButtons = Math.ceil(nbAnnonces / size);
  const paginationButtons = [];
  for (let i = 0; i < nbButtons; i++) {
    paginationButtons.push(
      <PaginationButton indice={i + 1} changeIndice={setPageIndex}/>
    )
  }

  const nextPagination = () => {
    if (pageIndex < nbButtons - 1) {
      setPageIndex(pageIndex + 1);
    }
  }

  const previousPagination = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }


  return (
    <>
      <div className="listes">
        <div className="annonces-list mt-4">
          {rows}
        </div>
        
        <AnnoncePagination paginationButtons={paginationButtons} nextPagination={nextPagination} previousPagination={previousPagination} />

      </div>
    </>
  );
}
