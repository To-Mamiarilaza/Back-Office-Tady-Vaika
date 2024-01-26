export default function TransmissionCardRow({
  idTransmission,
  nomTransmission,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div class="ligne">
        <div class="pe-3">{idTransmission}</div>
        <div class="crud-input">{nomTransmission}</div>
        <div>
          <div class="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idTransmission, nomTransmission)}
              class="action-button"
            >
              <i class="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idTransmission)}
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
