export default function TypeMoteurCardRow({
  idTypeMoteur,
  nomTypeMoteur,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div class="ligne">
        <div class="pe-3">{idTypeMoteur}</div>
        <div class="crud-input">{nomTypeMoteur}</div>
        <div>
          <div class="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idTypeMoteur, nomTypeMoteur)}
              class="action-button"
            >
              <i class="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idTypeMoteur)}
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
