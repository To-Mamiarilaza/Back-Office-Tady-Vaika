import "./ficheAnnonce.css";
import CarDetail from "../../components/AnnonceDetail/CarDetail";
import CarDescription from "../../components/AnnonceDetail/CarDescription";
import { useEffect, useState } from "react";
import AnnonceService from "../../services/AnnonceService";
import { useParams } from "react-router-dom";

export default function AnnonceDetail() {
  const [annonceDetail, setAnnonceDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    AnnonceService.getAnnonceDetail(id)
      .then((response) => {
        setAnnonceDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {annonceDetail !== null ? (
        <div className="fiche-container">
          <CarDetail annonceDetail={annonceDetail} />
          <CarDescription annonceDetail={annonceDetail} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
