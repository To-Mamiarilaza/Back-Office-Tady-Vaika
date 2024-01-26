export default function UsageCardRow({
  idUsage,
  nomUsage,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div className="ligne">
        <div className="pe-3">{idUsage}</div>
        <div className="crud-input">{nomUsage}</div>
        <div>
          <div className="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idUsage, nomUsage)}
              className="action-button"
            >
              <i className="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idUsage)}
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
