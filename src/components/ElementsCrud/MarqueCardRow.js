export default function MarqueCardRow({
  idMarque,
  nomMarque,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div class="ligne">
        <div class="pe-3">{idMarque}</div>
        <div class="crud-input">{nomMarque}</div>
        <div>
          <div class="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idMarque, nomMarque)}
              class="action-button"
            >
              <i class="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idMarque)}
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
