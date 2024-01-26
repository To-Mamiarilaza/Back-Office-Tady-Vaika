export default function CouleurCardRow({
  idCouleur,
  nomCouleur,
  codeCouleur,
  onButtonUpdatePerformed,
  onDeleteFunction,
}) {
  return (
    <>
      <div class="ligne">
        <div class="pe-3">{idCouleur}</div>
        <div class="crud-input row ps-4">
          <div class="col-md-6">{nomCouleur}</div>
          <div class="col-md-6">{codeCouleur}</div>
        </div>
        <div>
          <div class="d-flex ms-3">
            <button
              onClick={() => onButtonUpdatePerformed(idCouleur, nomCouleur, codeCouleur)}
              class="action-button"
            >
              <i class="fas fa-cog"></i>
            </button>
            <button
              onClick={() => onDeleteFunction(idCouleur)}
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
