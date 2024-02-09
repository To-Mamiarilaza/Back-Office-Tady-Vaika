export default function FavoriteFilterComponent({ clearFilter }) {
  return (
    <>
      <div className="fictif mb-3 mt-3">
        <div className="">
          <button type="button" className="btn btn-warning btn-sm" style={{fontSize: "11px"}} onClick={() => clearFilter()}>Annuler le filtre</button>
        </div>
      </div>
    </>
  );
}
