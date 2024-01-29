import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import FormatUtil from "../../services/FormatUtil";
import DashboardService from "../../services/DashboardService";

export default function GlobalStats({ currentMonthStats }) {
  const [targetYear, setTargetYear] = useState(currentMonthStats.year);
  const [yearMouvements, setYearMouvements] = useState([]);
  const [year, setYear] = useState(2024);

  const myChart = useRef(null);

  useEffect(() => {
    DashboardService.getYearMouvements(targetYear).then((response) => {
      if (response.data.message === "success") {
        setYearMouvements(response.data.data);
      }
    });
  }, [targetYear]);

  const getCommissionStats = (stats) => {
    var commissions = [];
    stats.forEach((stat) => {
      commissions.push(stat.commission_mois_actuelle);
    });
    return commissions;
  };

  const getSaledAnnonces = (stats) => {
    var saledAnnonces = [];
    stats.forEach((stat) => {
      saledAnnonces.push(stat.nb_annonce_vendu);
    });
    return saledAnnonces;
  };

  useEffect(() => {
    const ctx = myChart.current.getContext("2d");
    var data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          type: "bar",
          label: "Commission",
          backgroundColor: "rgba(245,38,24,0.7)",
          borderColor: "rgba(245,38,24,0.7)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(245,38,24,0.9)",
          hoverBorderColor: "rgba(245,38,24,0.9)",
          data: getCommissionStats(yearMouvements),
        },
        {
          type: "bar",
          label: "Annonce vendue",
          backgroundColor: "rgba(16,16,16,0.75)",
          borderColor: "rgba(16,16,16,0.75)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(16,16,16,0.9)",
          hoverBorderColor: "rgba(16,16,16,0.9)",
          data: getSaledAnnonces(yearMouvements),
        },
      ],
    };

    var chartInstance = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "top", // Position de la légende
            labels: {
              font: {
                size: 10, // Taille des labels de la légende
              },
              boxWidth: 30,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "rgba(16,16,16)", // Définir la couleur des labels de l'axe des x
              font: {
                size: 11, // Définir la taille des labels de l'axe des x
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: "rgba(245,38,24, 0.3)",
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [yearMouvements]);

  return (
    <>
      <div className="col-md-8 p-2">
        <div className="card stat-section">
          <div className="row">
            <div className="col-md-5">
              <h4 className="card-title">Tableau de bord</h4>
              <h4 className="card-description">
                Les résultats du mois en cours
              </h4>

              <div className="mt-3">
                <div className="result">
                  <div className="result-value">
                    {FormatUtil.toMoneyFormat(
                      currentMonthStats.commissionMoisActuelle
                    )}{" "}
                    AR
                  </div>
                  <div className="result-name">Commission obtenue</div>
                </div>
                <div className="result mt-3">
                  <div className="result-value">
                    {currentMonthStats.nbAnnonceVendu}
                  </div>
                  <div className="result-name">Annonce vendue</div>
                </div>
              </div>

              <a href="#lastSaled" className="red-button mt-4">
                Dernier annonces vendues
              </a>
            </div>
            <div className="col-md-7">
              <h4 className="card-title">Statistiques annuelles</h4>
              <form action="" className="mt-3">
                <div className="d-flex">
                  <input
                    type="number"
                    className="option-input w-50"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <button
                    type="button"
                    className="red-button ms-3"
                    value="Consulter"
                    onClick={(e) => setTargetYear(year)}
                  >
                    Valider
                  </button>
                </div>
              </form>

              <div className="chartContainer mt-3">
                <canvas ref={myChart}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
