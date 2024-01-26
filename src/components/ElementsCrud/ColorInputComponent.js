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
        <div className="ligne first-ligne row">
          <div className="col-md-1">{idCouleur}</div>
          <div className="col-md-7">
            <input
              type="text"
              className="crud-input crud-input-half"
              placeholder="Nom du couleur"
              value={nomCouleur}
              onChange={(e) => onColorNameChange(e.target.value)}
              required
            />
            <input
              type="text"
              className="crud-input crud-input-half"
              placeholder="Code couleur"
              value={codeCouleur}
              onChange={(e) => onColorValueChange(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <div className="d-flex">
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
