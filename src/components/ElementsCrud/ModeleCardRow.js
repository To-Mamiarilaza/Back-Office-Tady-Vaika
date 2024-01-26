export default function ModeleCardRow({
  idModele,
  nomModele,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div class="ligne">
        <div class="pe-3">{idModele}</div>
        <div class="crud-input">{nomModele}</div>
        <div>
          <div class="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idModele, nomModele)}
              class="action-button"
            >
              <i class="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idModele)}
              class="action-button"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
