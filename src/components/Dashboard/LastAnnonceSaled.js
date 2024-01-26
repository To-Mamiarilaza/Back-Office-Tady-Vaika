import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import LastSaledRow from "./LastSaledRow";
import FormatUtil from "../../services/FormatUtil";

export default function LastAnnonceSaled({ lastSaledAnnonces }) {
  const lastSaledRows = [];

  lastSaledAnnonces.forEach((lastSaled) => {
    lastSaledRows.push(
      <LastSaledRow
        key={lastSaled.id}
        idAnnonce={lastSaled.id}
        date={lastSaled.dateAnnonce}
        carImage={lastSaled.carImage}
        carname={lastSaled.nomMarque}
        username={lastSaled.prenomUsers}
        price={FormatUtil.toMoneyFormat(lastSaled.commissionObtenue)}
      />
    );
  });

  return (
    <>
      <div className="col-md-5 p-2">
        <div className="card bottom-card">
          <h4 className="card-title">Dernieres annonces vendues</h4>
          <hr />
          <div className="annonces-list mt-3">{lastSaledRows}</div>
        </div>
      </div>
    </>
  );
}
