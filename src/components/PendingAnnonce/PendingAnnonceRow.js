import { useNavigate } from "react-router-dom";
import FormatUtil from "../../services/FormatUtil";

export default function PendingAnnonceRow({ annonce }) {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{annonce.id}</td>
        <td>{annonce.dateAnnonce}</td>
        <td>{annonce.voiture}</td>
        <td>
          {annonce.description}
        </td>
        <td>{annonce.utilisateur}</td>
        <td className="prix">{FormatUtil.toMoneyFormat(annonce.prixVente)} AR</td>
        <td>
          <a type="button" className="detail-link" onClick={() => navigate("/annonces/" + annonce.id) }>
            Voir plus
          </a>
        </td>
      </tr>
    </>
  );
}
