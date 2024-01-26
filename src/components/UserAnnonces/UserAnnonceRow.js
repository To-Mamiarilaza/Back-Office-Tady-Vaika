import { useNavigate } from "react-router-dom";
import FormatUtil from "../../services/FormatUtil";

export default function UserAnnonceRow({annonce}) {
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td>{annonce.id}</td>
        <td>{annonce.dateAnnonce}</td>
        <td>{annonce.nomMarque + " " + annonce.nomModele}</td>
        <td>
          {annonce.description}
        </td>
        <td className={ annonce.status == 20 ? ("vendue") : ("attente")}>{ annonce.status == 10 && ("Non vendue")}{ annonce.status == 20 && ("Vendue")}</td>
        <td className="prix">{FormatUtil.toMoneyFormat(annonce.prixVente)} AR</td>
        <td>
          <a type="button" className="detail-link" onClick={() => navigate("/annonces/" + annonce.id)}>
            Voir plus
          </a>
        </td>
      </tr>
    </>
  );
}
