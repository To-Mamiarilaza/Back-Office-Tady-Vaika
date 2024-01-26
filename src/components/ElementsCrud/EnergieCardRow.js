export default function EnergieCardRow({
  idEnergie,
  nomEnergie,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div className="ligne">
        <div className="pe-3">{idEnergie}</div>
        <div className="crud-input">{nomEnergie}</div>
        <div>
          <div className="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idEnergie, nomEnergie)}
              className="action-button"
            >
              <i className="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idEnergie)}
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
