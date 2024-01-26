export default function ColorInputComponent({
  nomCouleur,
  codeCouleur,
  idCouleur,
  onColorNameChange,
  onColorValueChange,
  actionHandler,
}) {
  return (
    <>
      <form onSubmit={actionHandler}>
        <div class="ligne first-ligne row">
          <div class="col-md-1">{idCouleur}</div>
          <div class="col-md-7">
            <input
              type="text"
              class="crud-input crud-input-half"
              placeholder="Nom du couleur"
              value={nomCouleur}
              onChange={(e) => onColorNameChange(e.target.value)}
              required
            />
            <input
              type="text"
              class="crud-input crud-input-half"
              placeholder="Code couleur"
              value={codeCouleur}
              onChange={(e) => onColorValueChange(e.target.value)}
              required
            />
          </div>
          <div class="col-md-4">
            <div class="d-flex">
              {idCouleur == 0 ? (
                <button type="submit" className="action-button">
                  <i className="fas fa-save me-2"></i>
                  Enregistrer
                </button>
              ) : (
                <button type="submit" className="action-button">
                  <i className="fas fa-edit me-2"></i>
                  Modifier
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
