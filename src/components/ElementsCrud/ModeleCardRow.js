export default function ModeleCardRow({
  idModele,
  nomModele,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div className="ligne">
        <div className="pe-3">{idModele}</div>
        <div className="crud-input">{nomModele}</div>
        <div>
          <div className="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idModele, nomModele)}
              className="action-button"
            >
              <i className="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idModele)}
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
