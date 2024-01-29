import "./dashboard.css";
import { useEffect, useState } from "react";
import GlobalStats from "../../components/Dashboard/GlobalStats";
import SaleStats from "../../components/Dashboard/SaleStats";
import NumberCard from "../../components/Dashboard/NumberCard";
import LastAnnonceSaled from "../../components/Dashboard/LastAnnonceSaled";
import BestUserList from "../../components/Dashboard/BestUserList";
import { useNavigate } from "react-router-dom";
import DashboardService from "../../services/DashboardService";
import FormatUtil from "../../services/FormatUtil";

export default function Dashboard() {
  const navigate = useNavigate();

  const [currentMonthStats, setCurrentMonthStats] = useState(null);
  const [lastSaledAnnonces, setLastSaledAnnonces] = useState(null);
  const [bestUserList, setBestUserList] = useState(null);
  const [importantNumbers, setImportantNumbers] = useState(null);
  const [marqueStats, setMarqueStats] = useState(null);

  const [ready, setReady] = useState(false);

  if (localStorage.getItem("token") == null) {
    navigate("/login");
  }

  useEffect(() => {
    document.title = "Tableau de bord";
  
    // get all in one
    DashboardService.getDashboardStats()
    .then((response) => {
      if (response.data.message === "success") {
        setCurrentMonthStats(response.data.data.v_stat_current_month[0]);
        setLastSaledAnnonces(response.data.data.v_latest_annonce_vendu);
        setBestUserList(response.data.data.v_best_user);
        setImportantNumbers(response.data.data.v_nombre_important[0]);
        setMarqueStats(response.data.data.v_stat_annonce_vendu_par_marque);
      }
    })

  }, []);

  useEffect(() => {
    if (currentMonthStats !== null && lastSaledAnnonces !== null && bestUserList !== null && marqueStats !== null) {
      setReady(true);
    }
  }, [currentMonthStats, lastSaledAnnonces, bestUserList, marqueStats])

  return (
    <>
      {ready ? (
        <div className="container dashboard mx-auto mt-4">
          <div className="row">
            <GlobalStats currentMonthStats={currentMonthStats}/>
            <SaleStats marqueStats={marqueStats} />
          </div>

          <div className="row mt-3">
            <NumberCard
              title={"Utilisateurs"}
              icon={"fas fa-user"}
              number={importantNumbers.nbUsers}
              label={"Nombre total d'utilisateurs"}
            />
            <NumberCard
              title={"Annonces"}
              icon={"fas fa-file-alt"}
              number={importantNumbers.nbAnnonces}
              label={"Nombre total d' annonces"}
            />
            <NumberCard
              title={"Annonces vendues"}
              icon={"fas fa-clipboard-check"}
              number={importantNumbers.nbAnnonceVendu}
              label={"Les annonces vendues"}
            />
            <NumberCard
              title={"Commission obtenue"}
              icon={"far fa-credit-card"}
              number={FormatUtil.toMoneyFormat(importantNumbers.totalCommission) + " AR"}
              label={"Commission total obtenue"}
            />
          </div>

          <div className="row mt-3 mb-4">
            <LastAnnonceSaled lastSaledAnnonces={lastSaledAnnonces} />
            <BestUserList bestUserList={bestUserList} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
