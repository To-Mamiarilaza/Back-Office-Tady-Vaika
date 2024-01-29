import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SaleStats({ marqueStats }) {
  const myChart = useRef(null);

  const getLabels = ( stats ) => {
    let labels = [];
    stats.forEach((stat) => {
      labels.push(stat.nomMarque);
    });

    return labels;
  }

  const getData = ( stats ) => {
    let data = [];
    stats.forEach((stat) => {
      data.push(stat.nbAnnonceVendu);
    });

    return data;
  }

  useEffect(() => {
    const ctx = myChart.current.getContext("2d");

    var data = {
      labels: getLabels(marqueStats),
      datasets: [
        {
          label: "Vente par marque",
          borderWidth: 1,
          data: getData(marqueStats),
          backgroundColor: [
            "rgba(245,38,24,0.4)",
            "rgba(16,16,16,0.5)",
            "rgba(245,38,24,0.6)",
            "rgba(16,16,16,0.6)",
            "rgba(245,38,24,0.7)",
          ],
        },
      ],
    };

    var chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRation: true,
        plugins: {
          legend: {
            display: false,
            position: "bottom", // Position de la légende
            labels: {
              font: {
                size: 12, // Taille des labels de la légende
              },
              boxWidth: 20,
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    }
  });

  return (
    <>
      <div className="col-md-4 p-2">
        <div className="card stat-section">
          <h4 className="card-title">Vente réussie par marque</h4>
          <h4 className="card-description">Statistiques annuelle</h4>

          <div className="chartContainer mt-4 d-flex justify-content-center">
            <canvas ref={myChart}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
