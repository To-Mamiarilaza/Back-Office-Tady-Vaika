import { useNavigate } from "react-router-dom";
import FormatUtil from "../../services/FormatUtil";

export default function BestUserRow({ rang, bestUser }) {
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td>{rang}</td>
        <td>{bestUser.nom}</td>
        <td>{bestUser.prenom}</td>
        <td className="email">{bestUser.email}</td>
        <td className="price">{FormatUtil.toMoneyFormat(bestUser.commission)} AR</td>
        <td>
          <a className="detail-link" type="button" onClick={() => navigate("/user/" + bestUser.id + "/profile")}>
            Voir plus
          </a>
        </td>
      </tr>
    </>
  );
}
