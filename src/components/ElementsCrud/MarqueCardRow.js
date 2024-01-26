export default function MarqueCardRow({
  idMarque,
  nomMarque,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div className="ligne">
        <div className="pe-3">{idMarque}</div>
        <div className="crud-input">{nomMarque}</div>
        <div>
          <div className="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idMarque, nomMarque)}
              className="action-button"
            >
              <i className="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idMarque)}
              className="action-button"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
