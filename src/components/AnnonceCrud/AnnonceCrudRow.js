export default function AnnonceCrudRow({
  typeAnnonce,
  onDeleteFunction,
  onUpdateFunction,
}) {
  return (
    <>
      <tr>
        <td>{typeAnnonce.id}</td>
        <td>{typeAnnonce.nom}</td>
        <td>{typeAnnonce.commission} %</td>
        <td>{typeAnnonce.niveau}</td>
        <td>
          <a
            href="#"
            className="detail-link"
            data-bs-toggle="modal"
            data-bs-target="#updateModal"
            onClick={() => onUpdateFunction(typeAnnonce)}
          >
            <i className="fas fa-edit mx-3"></i>
          </a>
          <a href="#" onClick={() => onDeleteFunction(typeAnnonce.id)} className="detail-link">
            <i className="fas fa-trash mx-3"></i>
          </a>
        </td>
      </tr>
    </>
  );
}
