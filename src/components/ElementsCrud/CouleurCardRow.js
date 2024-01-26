export default function CouleurCardRow({
  idCouleur,
  nomCouleur,
  codeCouleur,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div className="ligne">
        <div className="pe-3">{idCouleur}</div>
        <div className="crud-input row ps-4">
          <div className="col-md-6">{nomCouleur}</div>
          <div className="col-md-6">{codeCouleur}</div>
        </div>
        <div>
          <div className="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idCouleur, nomCouleur, codeCouleur)}
              className="action-button"
            >
              <i className="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idCouleur)}
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
