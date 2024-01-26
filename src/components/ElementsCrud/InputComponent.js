export default function InputComponent({
  placeholder,
  inputValue,
  inputId,
  onChangeValue,
  actionHandler,
}) {
  return (
    <>
      <form onSubmit={actionHandler}>
        <div className="ligne first-ligne">
          <div className="pe-3">{inputId}</div>
          <div>
            <input
              type="text"
              onChange={(e) => onChangeValue(e.target.value)}
              value={inputValue}
              className="crud-input"
              placeholder={placeholder}
              required
            />
          </div>
          <div>
            <div className="d-flex ms-3">
              {inputId == 0 ? (
                <button
                  type="submit"
                  className="action-button"
                >
                  <i className="fas fa-save me-2"></i>
                  Enregistrer
                </button>
              ) : (
                <button
                  type="submit"
                  className="action-button"
                >
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
