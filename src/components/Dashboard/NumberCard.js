export default function NumberCard({title, icon, number, label}) {
  return (
    <>
      <div className="col-md-3 p-2">
        <div className="card stat-card">
          <h4 className="card-title">{title}</h4>
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-md-4 text-center">
              <i className={icon}></i>
            </div>
            <div className="col-md-8">
              <p className="number">{number}</p>
              <p className="description">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
