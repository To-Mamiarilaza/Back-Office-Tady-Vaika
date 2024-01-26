import { useEffect, useState } from "react";
import DashboardService from "../../services/DashboardService";
import BestUserRow from "./BestUserRow";

export default function BestUserList({ bestUserList }) {

  const rows = [];
  let rang = 1;
  bestUserList.forEach((bestUser) => {
    rows.push(<BestUserRow key={bestUser.id} rang={rang} bestUser={bestUser} />);
    rang += 1;
  });

  return (
    <>
      <div className="col-md-7 p-2">
        <div className="card best-user bottom-card">
          <h4 className="card-title">Meilleurs utilisateurs</h4>
          <h4 className="card-description">
            Les 5 meilleurs utilisateurs trie par les commissions obtenue
          </h4>
          <table className="table mt-3">
            <thead>
              <tr className="table-dark">
                <th>Rang</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Commission</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
