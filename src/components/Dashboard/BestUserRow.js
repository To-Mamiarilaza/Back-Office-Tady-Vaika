import FormatUtil from "../../services/FormatUtil";

export default function BestUserRow({ rang, bestUser }) {
  return (
    <>
      <tr>
        <td>{rang}</td>
        <td>{bestUser.nom}</td>
        <td>{bestUser.prenom}</td>
        <td className="email">{bestUser.email}</td>
        <td className="price">{FormatUtil.toMoneyFormat(bestUser.commission)} AR</td>
        <td>
          <a className="detail-link" href="">
            Voir plus
          </a>
        </td>
      </tr>
    </>
  );
}
