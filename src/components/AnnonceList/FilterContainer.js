import CouleurFilterComponent from "./CouleurFilterComponent";
import EnergieFilterComponent from "./EnergieFilterComponent";
import FavoriteFilterComponent from "./FavoriteFilterComponent";
import MarqueFilterComponent from "./MarqueFilterComponent";
import ModelFilterComponent from "./ModelFilterComponent";
import PriceFilterComponent from "./PriceFilterComponent";
import TailleFilterComponent from "./TailleFilterComponent";
import TypeMoteurFilterComponent from "./TypeMoteurFilterComponent";
import UsageFilterComponent from "./UsageFilterComponent";
import DateFilterComponent from "./DateFilterComponent";
import { useEffect, useState } from "react";

export default function FilterContainer({ setActiveFilter }) {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const defaultFilter = {
      prix_min: null,
      prix_max: null,
      marque: [],
      modele: [],
      couleur: [],
      taille: [],
      energie: [],
      usage: [],
      type_moteur: [],
      startDate: null,
      endDate: null,
    };

    setFilter(defaultFilter);
  }, []);

  // Execute the filter
  const sendFilter = () => {
    setActiveFilter(filter);
  };

  // Filter handler for marque
  const marqueFilterHandler = (idMarque) => {
    if (filter.marque.includes(idMarque)) {
      let index = filter.marque.indexOf(idMarque);
      if (index !== -1) {
        filter.marque.splice(index, 1);
      }
    } else {
      filter.marque.push(idMarque);
    }

    sendFilter();
  };

  // Filter handler for modele
  const modeleFilterHandler = (idModele) => {
    if (filter.modele.includes(idModele)) {
      let index = filter.modele.indexOf(idModele);
      if (index !== -1) {
        filter.modele.splice(index, 1);
      }
    } else {
      filter.modele.push(idModele);
    }

    sendFilter();
  };

  // Filter handler for taille
  const tailleFilterHandler = (idTaille) => {
    if (filter.taille.includes(idTaille)) {
      let index = filter.taille.indexOf(idTaille);
      if (index !== -1) {
        filter.taille.splice(index, 1);
      }
    } else {
      filter.taille.push(idTaille);
    }

    sendFilter();
  };

  // Filter handler for energie
  const energieFilterHandler = (idEnergie) => {
    if (filter.energie.includes(idEnergie)) {
      let index = filter.energie.indexOf(idEnergie);
      if (index !== -1) {
        filter.energie.splice(index, 1);
      }
    } else {
      filter.energie.push(idEnergie);
    }

    sendFilter();
  };

  // Filter handler for energie
  const usageFilterHandler = (idUsage) => {
    if (filter.usage.includes(idUsage)) {
      let index = filter.usage.indexOf(idUsage);
      if (index !== -1) {
        filter.usage.splice(index, 1);
      }
    } else {
      filter.usage.push(idUsage);
    }

    sendFilter();
  };

  // Filter handler for type moteur
  const typeMoteurFilterHandler = (idTypeMoteur) => {
    if (filter.type_moteur.includes(idTypeMoteur)) {
      let index = filter.type_moteur.indexOf(idTypeMoteur);
      if (index !== -1) {
        filter.type_moteur.splice(index, 1);
      }
    } else {
      filter.type_moteur.push(idTypeMoteur);
    }

    sendFilter();
  };

  // Filter handler for couleur
  const couleurFilterHandler = (idCouleur) => {
    if (filter.couleur.includes(idCouleur)) {
      let index = filter.couleur.indexOf(idCouleur);
      if (index !== -1) {
        filter.couleur.splice(index, 1);
      }
    } else {
      filter.couleur.push(idCouleur);
    }

    sendFilter();
  };

  const priceFilterHandler = (min, max) => {
    filter.prix_min = min;
    filter.prix_max = max;

    if (min === "" || max === "" || (min == "0" && max == "0")) {
      filter.prix_min = null;
      filter.prix_max = null;
    }

    sendFilter();
  };

  const dateFilterHandler = (minDate, maxDate) => {
    filter.startDate = minDate;
    filter.endDate = maxDate;

    if (minDate == "" || maxDate == "") {
      filter.startDate = null;
      filter.endDate = null;
    }

    sendFilter();
  };

  const clearFilter = () => {
    console.log("CLEARING FILTER");
    setActiveFilter(null);
  };

  return (
    <>
      <h4 className="title">FILTRER LE RESULTAT</h4>
      <hr />
      <div className="filter-section">
        <div className="accordion-filter mt-3">
          {/* PRIX */}
          <PriceFilterComponent priceFilterHandler={priceFilterHandler} />

          {/* MARQUE */}
          <MarqueFilterComponent marqueFilterHandler={marqueFilterHandler} />

          {/* MODELE */}
          <ModelFilterComponent modeleFilterHandler={modeleFilterHandler} />

          {/* COULEUR */}
          <CouleurFilterComponent couleurFilterHandler={couleurFilterHandler} />

          {/* TAILLE */}
          <TailleFilterComponent tailleFilterHandler={tailleFilterHandler} />

          {/* ENERGIE */}
          <EnergieFilterComponent energieFilterHandler={energieFilterHandler} />

          {/* USAGE */}
          <UsageFilterComponent usageFilterHandler={usageFilterHandler} />

          {/* Type de moteur */}
          <TypeMoteurFilterComponent
            typeMoteurFilterHandler={typeMoteurFilterHandler}
          />

          {/* DATE */}
          <DateFilterComponent dateFilterHandler={dateFilterHandler} />

          <FavoriteFilterComponent clearFilter={clearFilter} />
        </div>
      </div>
    </>
  );
}
